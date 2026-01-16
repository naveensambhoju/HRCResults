#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "public", "index.html");
const now = new Date().toISOString();

// Read the index.html file
let content = fs.readFileSync(indexPath, "utf8");

// Update the LAST_DEPLOYED timestamp
content = content.replace(
  /const LAST_DEPLOYED = "[^"]*";/,
  `const LAST_DEPLOYED = "${now}";`
);

// Write back to index.html
fs.writeFileSync(indexPath, content);
console.log("✓ Deployment timestamp updated:", now);
