// Asynchronous - Making a Directory.
const fs = require('fs');

console.log('Going to create a directory ./tmp');
fs.mkdir('./tmp', function(err) {
    if (err) { return console.error(err); }
    console.log('Directory created successfully!');
});
