#!/usr/bin/env node
// cli.mjs

import fetchLibraryData from './fetch-library-data.mjs';

// Get command-line arguments
const libraryName = process.argv[2]; 
const baseUrl = process.argv[3];
const mainSelector = process.argv[4];

if (!libraryName || !baseUrl) {
  console.error('Usage: fetch-library-data <libraryName> <baseUrl> <mainSelector>');
  process.exit(1);
}

fetchLibraryData(libraryName, baseUrl, mainSelector)
  .then(res => res)
  .catch(error => {
    console.error('❌ Error fetching documentation:', error);
  })
  .finally(() => {
    console.log('✔️ Documentation fetched and updated successfully!');
    // process.exit(1);
  });
