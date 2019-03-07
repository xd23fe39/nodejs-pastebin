#!/usr/bin/env node
/**
 ** Node.JS Application
 **
 ** Textreader (2017)
 */

const fs = require('fs');
const os = require('os')
const filename = "../../test/data/simpledata.txt";

function osversion() {
  console.log("OS Version: " + os.release() + "\n");
}

function checkfile(data, regex) {
  var rePattern = new RegExp(regex);
  return data.match(rePattern);
}

osversion();

fs.stat(filename, (err, stats) => {
  if (err) {
    console.log('fs.stat: Failure!');
    throw err;
  }
  console.log('  Access:   ' + stats.atime);
  console.log('  Modified: ' + stats.mtime);
  console.log('  Changed:  ' + stats.ctime);
  console.log('  Created:  ' + stats.birthtime);
  console.log();
});

fs.readFile(filename, 'utf-8', (err, data) => {
  if (err) {
    console.log('fs.readFile: Failure!');
    throw err;
  }
  else {
    console.log('fs.readFile: OK\n');
    console.log(data);
    console.log('RegExp: ' + (checkfile(data, '^([1-9]+)(.*)')));
  }
});
