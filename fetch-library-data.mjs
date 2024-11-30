import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import jsdom from 'jsdom';
import TurndownService from 'turndown';

const turndownService = new TurndownService();


/**
 * Utility that finds a nav element and extracts an array of all links
 * @param {string | undefined} page 
 * @param {Document | undefined} doc the document context 
 * @returns {string[]} an array with all pages
 */
function getPages(page, doc) {
  if (!doc)
    return console.warn("Document context not provided");
  if (!page || !page?.length)
    return console.warn("Page URL not provided");
  const host = new URL(page || '').host;
  if (!host?.length)
    return console.warn("Page URL not provided");

  const pages = [];
  // identify all potential nav elements
  const ALL = [...doc.body.getElementsByTagName('*')]
    .filter(n => n.matches('nav,.nav,[class^=nav-],ul,[class^="list-"],aside'));
  const LENGTH = ALL.length;
  let INDEX = 0;
  let potentialNavs = [];
  let currentElement;
  let currentLinks;

  while (INDEX < LENGTH) {
    currentElement = ALL[INDEX];
    INDEX += 1;
    currentLinks = [...currentElement.getElementsByTagName('A')];

    if (currentLinks.length) potentialNavs.push({ element: currentElement, links: currentLinks })
  }
  const max = potentialNavs.length ? Math.max(...potentialNavs.map(n => n.links.length)) : 0;
  // identify the main nav element
  const nav = max ? potentialNavs.find((n) => n.links.length === max) : null;
  // console.log({ max, nav }, potentialNavs, ALL);

  if (!nav) {
    console.warn("❌ Error: a valid nav element not found. Aborting...");
    return null;
  }

  nav.links.filter(l => !l.hash.length).forEach(link => {
    if (link.href.includes(host)) pages.push(link.href);
  });
  return pages;
}

/**
 * Returns the latest version
 * @param {string} libraryName 
 * @returns {string}
 */
async function checkLatestVersion(libraryName) {
  try {
    const response = await fetch(`https://registry.npmjs.org/${libraryName}/latest`);
    const data = await response.json();
    return data.version; // Return the latest version
  } catch (error) {
    console.error(`❌ Error checking latest version for ${libraryName}:`, error);
    return null; // Return null in case of error
  }
}

/**
 * Check for latest library version and update documentation
 * 
 * @param {string} libraryName 
 * @param {string} baseUrl 
 * @param {string?} mainSelector 
 * 
 * @example
 * // Example usage
 * fetchLibraryData(
 *  'drizzle-orm',
 *  'https://orm.drizzle.team/docs/overview',
 *  'https://registry.npmjs.org/drizzle-orm/latest'
 * );
 */
async function fetchLibraryData(libraryName, baseUrl, mainSelector) {
  const contextFolderPath = path.resolve('context');
  if (!fs.existsSync(contextFolderPath)) {
    fs.mkdirSync(contextFolderPath, { recursive: true });
    console.log(`✔️ Context folder created at ${contextFolderPath}`);
  }
  const jsonFile = path.resolve(`context`, libraryName + '.json');
  const docFile = path.resolve(`context`, libraryName + '.md');

  if (!fs.existsSync(jsonFile)) {
    fs.writeFileSync(jsonFile, JSON.stringify({ name: libraryName, version: '0.0.0' }, null, 2));
    console.log(`✔️ JSON file created for ${libraryName}`);
  } else {
    console.log(`✔️ JSON file already exists for ${libraryName}`);
  }

  const currentVersion = JSON.parse(await fs.promises.readFile(jsonFile, 'utf-8')).version;
  const latestVersion = await checkLatestVersion(libraryName);
  const selector = mainSelector || 'article,main';

  if (latestVersion === currentVersion) {
    console.log(`✔️ Documentation is up to date for ${libraryName}`);
    return;
  } else {
    console.log(`✔️ Updating documentation for ${libraryName} from ${currentVersion} to ${latestVersion}...`);
  }

  try {
    // 1. Create a jsdom environment to run getPages
    const { JSDOM } = jsdom;
    const { window } = new JSDOM(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test Document</title>
    </head>
    <body></body>
    </html>`, {
      url: baseUrl,
      referrer: baseUrl,
      contentType: 'text/html',
      includeNodeLocations: true,
    });
    const { document: doc } = window;

    // 2. Fetch the main page to get all links using getPages
    const $ = await cheerio.fromURL(baseUrl);
    const mainPageHtml = $('body').clone().find('img,svg,video,script,style,link,meta,noscript,iframe,canvas,audio,video,embed,object').remove().end().html();
    doc.body.innerHTML = mainPageHtml || '';

    // 3. Get all pages using your getPages function
    const allPages = getPages(baseUrl, doc);
    console.log('All pages:', allPages?.length);

    if (!allPages || !allPages.length) return;

    let documentation = '';

    // 4. Fetch and process each page
    // for (const pageUrl of allPages.slice(0,5)) {
    for (const pageUrl of allPages) {
      const $ = await cheerio.fromURL(pageUrl);
      // $('code').each((_, element) => {
      //   const $element = $(element);
      //   // const textContent = $element[0].textContent; // Get the textContent of the <code> tag
      //   const textContent = $element.children().each((_, c) => $(c).html($(c)[0].textContent)); // Get the textContent of the <code> tag
      //   $element.html(textContent); // Replace the HTML content with the textContent
      // });
      const pageHtml = $(selector).clone().find('img,svg,video,script,style,link,meta,noscript,iframe,canvas,audio,video,embed,object').remove().end().html();
      console.log('> Current page:' + pageUrl, pageHtml?.length);

      // 4.1 Extract content from the <main> element
      documentation += pageHtml;
    }

    // 5. Convert documentation to MD
    try {
      documentation = turndownService.turndown(documentation);
      console.log(`✔️ Documentation for ${libraryName} converted to MD`);
    } catch (error) {
      console.error(`❌ Error converting documentation to MD for ${libraryName}:`, error);
    }
    // console.log('Converted documentation:', documentation.length)

    // 6. Update the documentation file
    try {
      fs.writeFileSync(docFile, documentation, 'utf-8');
      console.log(`✔️ Documentation for ${libraryName} updated in ${libraryName}.md`);
    } catch (error) {
      console.error(`❌ Error updating documentation for ${libraryName}:`, error);
    }

    // 7. Update The JSON: TO DO
    fs.writeFileSync(jsonFile, JSON.stringify({ name: libraryName, version: latestVersion }, null, 2));
    console.log(`✔️ All tasks completed for ${libraryName}.`);
  } catch (error) {
    console.error(`❌ Error fetching data for ${libraryName}:`, error);
  }
}

export default fetchLibraryData;
