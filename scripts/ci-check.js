#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const requiredFiles = [
  'index.html',
  'assets/styles.css',
  'assets/favicon.svg',
  'README.md',
  'package.json',
];

const failures = [];
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

for (const file of requiredFiles) {
  if (!fs.existsSync(path.join(root, file))) failures.push(`Missing required file: ${file}`);
}

if (failures.length === 0) {
  const html = read('index.html');
  const css = read('assets/styles.css');
  const readme = read('README.md');
  const pkg = JSON.parse(read('package.json'));

  const checks = [
    [html.includes('<!doctype html>'), 'index.html must declare a doctype'],
    [/<meta\s+name=\"description\"/i.test(html), 'index.html must include an SEO description'],
    [html.includes('href="assets/styles.css"'), 'index.html must load the stylesheet'],
    [html.includes('id="features"') && html.includes('id="deploy"'), 'index.html must expose features and deploy sections'],
    [html.includes('aria-label='), 'index.html must include accessible labels'],
    [css.includes('@media'), 'styles.css must include responsive media queries'],
    [css.includes(':root'), 'styles.css must define design tokens in :root'],
    [readme.includes('## Quick start'), 'README.md must document quick start steps'],
    [readme.includes('## Deployment'), 'README.md must document deployment guidance'],
    [readme.includes('npm run ci'), 'README.md must explain the CI command'],
    [pkg.scripts && pkg.scripts.ci === 'node scripts/ci-check.js', 'package.json must expose the CI script'],
  ];

  for (const [passed, message] of checks) {
    if (!passed) failures.push(message);
  }

  const forbidden = ['TODO', 'lorem ipsum', 'your-project-name'];
  for (const token of forbidden) {
    const lowerToken = token.toLowerCase();
    for (const file of ['index.html', 'README.md']) {
      if (read(file).toLowerCase().includes(lowerToken)) failures.push(`${file} contains placeholder text: ${token}`);
    }
  }
}

if (failures.length > 0) {
  console.error('CI checks failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('CI checks passed. Landing page, documentation, and package metadata are ready.');
