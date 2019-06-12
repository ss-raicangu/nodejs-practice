// Asynchronous - Truncating File.
const fs = require('fs');

console.log('Going to open an existing file');
fs.open('fs-truncated-file.txt', 'r+', function(err, fd) {
    if (err) { return console.error(err); }
    console.log('File opened successfully!');
    console.log('Writing new content.');

    fs.write(fd, Buffer.from('Tutorials Point is giving self learning content\r\nto teach the world in simple and easy way!!!!!\r\n'), function(err) {
        if (err) { return console.error(err); }
        console.log('Written to file successfully!');
        console.log('Reading file before truncating.');
    });

    // Read file before truncating.
    fs.read(fd, Buffer.alloc(97), 0, 97, 0, function(err, bytes, buf) {
        if (err) { return console.error(err); }
        if (bytes > 0) { console.log(buf.slice(0, bytes).toString()); }
    });

    // Truncate to 10 bytes.
    console.log('Going to truncate the file to 10 bytes.');
    fs.ftruncate(fd, 10, function(err) {
        if (err) { return console.error(err); }
        console.log('File truncated successfully.');
        console.log('Going to read the same file.');
    });
    
    fs.read(fd, Buffer.alloc(10), 0, 10, 0, function(err, bytes, buf) {
        if (err) { return console.error(err); }
        if (bytes > 0) { console.log(buf.slice(0, bytes).toString()); }
    });

    fs.close(fd, function(err) {
        if (err) { return console.error(err); }
        console.log('File closed successfully.');
    });
});
