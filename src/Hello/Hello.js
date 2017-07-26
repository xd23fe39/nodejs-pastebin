#!/usr/bin/env node
/* Hello.js - Simple NodeJS Code */

var timeout = 3000;

function myFunc(arg) {
  console.log("Say: " + arg);
}

console.log("Timeout: " + timeout + "\n");

setTimeout(myFunc, timeout, 'User');
