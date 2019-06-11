var fs = require('fs');
var zlib = require('zlib');

// Read/Write streams are created at the same time.
// Code blocks must be alternately commented out so de-|compression works.

// Compress the file input.txt to input.gz.
// fs.createReadStream('input.txt')
//   .pipe(zlib.createGzip())
//   .pipe(fs.createWriteStream('input.txt.gz'));
// console.log('File Compressed');

// Decompress the file input.gz to input.txt.
fs.createReadStream('input.txt.gz')
  .pipe(zlib.createGunzip())
  .pipe(fs.createWriteStream('decompressed-input.txt'));
console.log('File Decompressed');
