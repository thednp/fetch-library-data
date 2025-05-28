import fs from 'node:fs';
import path from 'node:path';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';
import jsdom from 'jsdom';
import TurndownService from 'turndown';
import * as gfm from "turndown-plugin-gfm";

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
  const {host, protocol} = new URL(page || '');

  if (!host?.length)
    return console.warn("Page URL not provided");

  const pages = [];
  // identify all potential nav elements
  const ALL = [...doc.body.getElementsByTagName('*')]
    .filter(n => n.matches('nav,.nav,ul,[class^=nav-],[class*=nav],[class^=list-],aside'));
  const LENGTH = ALL.length;
  let INDEX = 0;
  let potentialNavs = [];
  let currentElement;
  let currentLinks;

  while (INDEX < LENGTH) {
    currentElement = ALL[INDEX];
    INDEX += 1;
    currentLinks = [...currentElement.getElementsByTagName('A')];

    if (currentLinks.length) potentialNavs.push({ element: currentElement, links: currentLinks });
  }
  const max = potentialNavs.length ? Math.max(...potentialNavs.map(n => n.links.length)) : 0;
  // identify the main nav element
  const nav = max ? potentialNavs.find((n) => n.links.length === max) : null;

  if (!nav) {
    throw new Error("x Error: a valid nav element not found. Aborting...");
  }

  nav.links.forEach(link => {
    // if (link.href.includes(host)) pages.push(link.href);
    const href = link.getAttribute("href");
    const target = link.getAttribute("target");
    if (target === "_blank") return;
    if (!href?.includes(host) && !href?.startsWith("http")) {
      pages.push(protocol + "//" + host + href);
    } else if (href?.includes(host)) {
      pages.push(href);
    }
  });
  return pages;
}

/**
 * Returns the latest version
 * @param {string} libraryName 
 * @returns {Promise<string>}
 */
async function checkLatestVersion(libraryName) {
  const response = await fetch(`https://registry.npmjs.org/${libraryName}/latest`);
  const data = await response.json();
  // Return the latest version
  if (response.status === 200) {
    return data.version;
  // Throw an error
  } else {
    throw new Error(`x Error fetching latest version for "${libraryName}" package: ` + data);
  }
}

/**
 * Returns a JSDOM Document object from a given URL
 * @param {string} url
 * @returns {Document} the JSDOM Document object
 */
function getJSDOM(url) {
  // const host = new URL(url).host;
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
      url: url,
      referrer: url,
      contentType: 'text/html',
      includeNodeLocations: true,
      runScripts: 'dangerously',
    }
  );
  return window.document;
}

/**
 * Check for latest library version and update documentation
 * 
 * @param {string} library the library name and instruction
 * @param {string} baseUrl the base URL of the documentation
 * @param {string?} mainSelector the selector for the main element
 * 
 * @example
 * // Example usage
 * fetchLibraryData(
 *  'drizzle-orm',
 *  'https://orm.drizzle.team/docs/overview',
 *  'https://registry.npmjs.org/drizzle-orm/latest',
 *  'article,main'
 * );
 */
async function fetchLibraryData(library, baseUrl, mainSelector) {
  const [libraryName, instruction] = library.split('[').map(s => s.replace(']', ''));
  const contextFolderPath = path.resolve('context');
  const selector = mainSelector || 'article,main';
  const fileName = libraryName.replace(/\@/g, '').replace(/\//g, '-');
  const jsonFile = path.resolve(`context`, fileName + (instruction && instruction !== 'single' ? '-' + instruction : '') + '.json');
  const docFile = path.resolve(`context`, fileName + (instruction && instruction !== 'single' ? '-' + instruction : '') + '.md');

  // Check for latest version first, the package may not exist
  const latestVersion = await checkLatestVersion(libraryName);

  if (!fs.existsSync(contextFolderPath)) {
    fs.mkdirSync(contextFolderPath, { recursive: true });
    console.log(`✔️ Context folder created at ${contextFolderPath}.`);
    console.warn(`ℹ️  IMPORTANT: don't forget to add the "context" folder to your ".gitignore" and ".npmignore" files!`);
  }

  if (!fs.existsSync(jsonFile)) {
    fs.writeFileSync(jsonFile, JSON.stringify({ name: libraryName, version: '0.0.0' }, null, 2));
    console.log(`✔️ JSON file created for "${libraryName}"`);
  } else {
    console.log(`✔️ JSON file already exists for "${libraryName}"`);
  }
  const currentVersion = JSON.parse(await fs.promises.readFile(jsonFile, 'utf-8')).version;

  if (latestVersion === currentVersion) {
    console.log(`✔️ Documentation is up to date for "${libraryName}"`);
    return;
  } else {
    console.log(`✔️ Updating documentation for "${libraryName}" from ${currentVersion} to ${latestVersion}...`);
  }

  try {
    let doc;
    let allPages;
    let documentation = `${libraryName} version: ${latestVersion}, last updated: ${new Date().toISOString()}\n`;

    try {
      // 1. Create a jsdom environment to run getPages
      doc = getJSDOM(baseUrl);
      // 2. Fetch the main page to get all links using getPages
      const $ = await cheerio.fromURL(baseUrl);
      const mainPageHtml = $('body').clone().find('img,svg,video,script,style,link,meta,noscript,iframe,canvas,audio,video,embed,object').remove().end().html();
      doc.body.innerHTML = mainPageHtml || '';

      // 3. Get all pages using your getPages function
      allPages = instruction === 'single' ? [baseUrl] : getPages(baseUrl, doc);
      console.log('> Main page:', baseUrl);
      console.log('> Total pages:', allPages?.length || 0);
    } catch (error) {
      throw new Error(`Error fetching "${libraryName}": ` +  error?.message || error);
    }

    // 4. Fetch and process each page
    // for (const pageUrl of allPages.slice(0,5)) {
    for (const pageUrl of allPages) {
      try {
        const $ = await cheerio.fromURL(pageUrl);
        // 4.1 Extract content from the element.mainSelector
        const pageHtml = $(selector).clone().find('img,svg,video,script,style,link,meta,noscript,iframe,canvas,audio,video,embed,object').remove().end().html();
        
        // 4.2 Extract content from the target element
        if (pageHtml?.length) {
          console.log('> Current page: ' + pageUrl, pageHtml?.length + ' characters');
          documentation += pageHtml;
          // throw new Error(`x Couldn't fetch documentation for "${libraryName}" or page ${pageUrl} is empty!`);
        }
        
      } catch (er) {
        // const pageTitle = pageUrl.split(/[\\/]/).filter(x => x)?.pop() || pageUrl;
        // documentation += `\n${pageTitle} is not found or the page is under construction.\n`;
        console.error(`x ${String(er)} Skipping ${pageUrl}...`)
      }
    }

    // 5. Convert documentation to MD
    try {
      const turndownService = new TurndownService();
      turndownService.use([gfm.tables, gfm.taskListItems]);
      
      documentation = turndownService.turndown(documentation);
      console.log(`✔️ Documentation for "${libraryName}" successfully converted to markdown!`);
    } catch (error) {
      throw new Error(`x Error converting documentation to markdown format for "${libraryName}": ` + error?.message || error);
    }

    // 6. Update the documentation file
    try {
      fs.writeFileSync(docFile, documentation, 'utf-8');
      console.log(`✔️ Documentation for "${libraryName}" updated in ${libraryName}.md`);
    } catch (error) {
      throw new Error(`x Error updating documentation for "${libraryName}": ` + error?.message || error);
    }

    // 7. Update The JSON: TO DO
    fs.writeFileSync(jsonFile, JSON.stringify({ name: libraryName, version: latestVersion }, null, 2));
    console.log(`✔️ All tasks completed for "${libraryName}".`);
  } catch (error) {
    throw new Error(error?.message || error);
  }
}

export default fetchLibraryData;
