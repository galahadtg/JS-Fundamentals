#!/usr/bin/node
// A script that prints a message depending on the number of arguments passed

const argsCount = process.argv.length - 2; // exclude 'node' and script name

if (argsCount === 0) {
  console.log('No argument');
} else if (argsCount === 1) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}
