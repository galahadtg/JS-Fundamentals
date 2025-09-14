#!/usr/bin/node
// A script that prints two arguments in the format "<arg1> is <arg2>"

const arg1 = process.argv[2];
const arg2 = process.argv[3];

console.log(arg1 + ' is ' + arg2);
