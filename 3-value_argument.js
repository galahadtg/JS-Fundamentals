#!/usr/bin/node
// A script that prints the first argument passed to it

const firstArg = process.argv[2]; // the first actual argument

if (firstArg === undefined) {
  console.log('No argument');
} else {
  console.log(firstArg);
}
