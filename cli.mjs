#!/usr/bin/env node
// cli.mjs

import fetchLibraryData from './fetch-library-data.mjs';

// Get command-line arguments
const libraryName = process.argv[2]; 
const baseUrl = process.argv[3];
const mainSelector = process.argv[4];

if (!libraryName || !baseUrl) {
  console.warn(`\n *️⃣  Usage:
    fetch-library-data <libraryName> <baseUrl> <mainSelector>
    libraryName: The name of the library you want to fetch documentation for.
    baseUrl: The base URL of the documentation.
    mainSelector: The CSS selector for the main content element.
  `);
  console.log(`\n ℹ️  Supported:
    fetch-library-data tailwindcss https://tailwindcss.com/docs/installation/ main,.max-w-3xl.mx-auto
    fetch-library-data daisyui https://daisyui.com/docs/install/ .prose
    fetch-library-data solid-js https://docs.solidjs.com/
    fetch-library-data solid-start https://docs.solidjs.com/solid-start
    fetch-library-data solid-router https://docs.solidjs.com/solid-router
    fetch-library-data solid-meta https://docs.solidjs.com/solid-meta
    fetch-library-data drizzle-orm https://orm.drizzle.team/docs/overview
    fetch-library-data react https://react.dev/reference/react
    fetch-library-data react-router https://reactrouter.com/start .md-prose
    fetch-library-data nextjs https://nextjs.org/docs
    fetch-library-data valibot[guide] https://valibot.dev/guides/introduction/
    fetch-library-data valibot[api] https://valibot.dev/api/
    fetch-library-data vite https://vite.dev/guide/
    fetch-library-data vitest https://vitest.dev/guide/
`);
  process.exit(1);
}

fetchLibraryData(libraryName, baseUrl, mainSelector)
  .then(res => res)
  .catch(error => {
    console.error(error?.message || error);
    process.exit(1);
  })
  .finally(() => {
    console.log('✔️ Documentation fetched and updated successfully!');
  });
