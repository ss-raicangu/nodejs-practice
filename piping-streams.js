var fs = require('fs');

// Create a readable stream.
var readerStream = fs.createReadStream('input.txt');
// Create a writable stream.
var writerStream = fs.createWriteStream('piped-output.txt');

// Pipe the read and write operations.
// Read input.txt and write to piped-output.txt.
readerStream.pipe(writerStream);

console.log('Program Ended');
