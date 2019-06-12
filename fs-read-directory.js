// Asynchronous - Reading a Directory.
const fs = require('fs');

console.log('Going to read directory ./tmp');
fs.readdir('./tmp', function(err, files) {
    if (err) { return console.error(err); }
    files.forEach(file => { console.log(file); });
});
