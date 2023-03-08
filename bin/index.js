#!/usr/bin/env node

const { program } = require('commander');
const fs = require("fs");

program
  .command('clone')
  .argument('<directory>', 'directory to write to')
  .description('directory to write to')
  .action((directory) => {
    fs.writeFile("directory", `const fs = require("fs")`, () => {})
});

program.parse();