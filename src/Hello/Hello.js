#!/usr/bin/env node
/* Hello.js - Simple NodeJS Code */

var timeout = 3000;

function myFunc(arg) {
  console.log("Say: " + arg + "\n");
}

console.log("Wait: " + timeout + " Milliseconds.\n");

setTimeout(myFunc, timeout, 'HELLO!');
