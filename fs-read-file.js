// Reading a file: Asynchronous vs. Synchronous.
const fs = require('fs');

// Asynchronous read.
fs.readFile('input.txt', function(err, data) {
    if (err) { return console.error(err); }
    console.log('Asynchronous read: ' + data);
});

// Synchronous read.
const data = fs.readFileSync('input.txt');
console.log('Synchronous read: ' + data);

console.log('Program Ended');
