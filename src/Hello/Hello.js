/* Hello.js - Simple NodeJS Code */

function myFunc(arg) {
  console.log(`Say: ${arg}`);
}

console.log("\nHello NodeJS!");

setTimeout(myFunc, 1500, 'User');
