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
    pnpm exec fetch-library-data tailwindcss https://tailwindcss.com/docs/installation/ main,.max-w-3xl.mx-auto
    pnpm exec fetch-library-data solid-js https://docs.solidjs.com/
    pnpm exec fetch-library-data solid-start https://docs.solidjs.com/solid-start
    pnpm exec fetch-library-data solid-router https://docs.solidjs.com/solid-router
    pnpm exec fetch-library-data solid-meta https://docs.solidjs.com/solid-meta
    pnpm exec fetch-library-data svelte https://svelte.dev/docs/svelte/overview
    pnpm exec fetch-library-data @sveltejs/kit https://svelte.dev/docs/kit/introduction
    pnpm exec fetch-library-data drizzle-orm https://orm.drizzle.team/docs/overview
    pnpm exec fetch-library-data react https://react.dev/reference/react
    pnpm exec fetch-library-data react-router https://reactrouter.com/start .md-prose
    pnpm exec fetch-library-data nextjs https://nextjs.org/docs
    pnpm exec fetch-library-data valibot[guide] https://valibot.dev/guides/introduction/
    pnpm exec fetch-library-data valibot[api] https://valibot.dev/api/
    pnpm exec fetch-library-data vite https://vite.dev/guide/
    pnpm exec fetch-library-data vitest https://vitest.dev/guide/
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
