#!/usr/bin/env node

const welcome = require('cli-welcome');
const pkg = require('./package.json');

welcome({
  title: pkg.name,
  tagLine: `Get to know Sam`,
  description: pkg.description,
  version: pkg.version,
  color: '#000000',
  bgColor: '#f00',
  bold: true,
  clear: true
});

console.log(`
sam hou

samhou@tencent.com
`);
