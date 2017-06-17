#!/usr/bin/env node
/**
 ** Node.JS Application
 **
 ** SimpleWebServer (2017)
 */

var fs = require("fs");
var filename = "../DATA/textfile.txt";

function checkfile(data, regex) {
  var rePattern = new RegExp(regex);
  return data.match(rePattern);
}

fs.stat(filename, (err, stats) => {
  if (err) {
    console.log('fs.stat: Failure!');
    throw err;
  }
  console.log('Access:   ' + stats.atime);
  console.log('Modified: ' + stats.mtime);
  console.log('Changed:  ' + stats.ctime);
  console.log('Created:  ' + stats.birthtime);
});

fs.readFile(filename, 'utf-8', (err, data) => {
  if (err) {
    console.log('fs.readFile: Failure!');
    throw err;
  }
  else {
    console.log('fs.readFile: OK\n');
    console.log(data);
    console.log('RegExp: ' + (checkfile("und und und", '(.*)und(.*)')).length);
  }
});
