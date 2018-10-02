#!/usr/bin/env node

var timeout = 3000;

function myFunc(arg) {
  console.log("Say: " + arg);
}

console.log("Timeout: " + timeout + "\n");

setTimeout(myFunc, timeout, 'User');
