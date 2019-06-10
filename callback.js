var fs = require('fs');

// Blocking code
var data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log('Blocking Program Ended');

// Non-blocking code
fs.readFile('input.txt', function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});
console.log('Non-Blocking Program Ended');