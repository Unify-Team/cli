#!/usr/bin/env node

const { program } = require('commander');
const fs = require("fs");
const axios = require("axios");

program
  .command('components')
  .argument('<directory>', 'directory to write to')
  .description('directory to write to')
  .action(async (directory) => {
    let outpuit = await axios.post("http://localhost:5001/unify-to-mui")
    fs.writeFile(directory, outpuit.data.muiString, () => {})
});

program
  .command('token')
  .argument('<directory>', 'directory to write to')
  .description('directory to write to')
  .action(async (directory) => {
    let outpuit = await axios.post("http://localhost:5001/get-new-tokens")
    fs.writeFile(directory, outpuit.data.muiString, () => {})
});

program.parse();