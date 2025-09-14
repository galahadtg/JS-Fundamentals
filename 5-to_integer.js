#!/usr/bin/node
// A script that prints "My number: <number>" if the first argument can be converted to integer

const arg = process.argv[2];
const num = parseInt(arg);

if (isNaN(num)) {
  console.log('Not a number');
} else {
  console.log('My number: ' + num);
}
