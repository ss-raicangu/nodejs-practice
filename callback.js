var fs = require('fs');

// Blocking code
var data = fs.readFileSync('input.txt');
console.log('1: ' + data.toString());
console.log('Blocking Program Ended');

// Non-blocking code
fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log('2: ' + data.toString());
});
console.log('Non-Blocking Program Ended');

// How Node.js apps work? - Asynchronous functions
fs.readFile('input.txt', function(err, data) {
    if (err) {
        console.log(err.stack);
        return;
    };
    console.log('3: ' + data.toString());
});
console.log('Asynchronous Functions Program Ended');

