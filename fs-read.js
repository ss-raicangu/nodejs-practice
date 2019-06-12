// Asynchronous - Reading from file using read function.
const fs = require('fs');

console.log('Going to open an existing file');
fs.open('input.txt', 'r', function(err, fd) {
    if (err) { return console.error(err); }
    console.log('File opened successfully!');
    console.log('Going to read the file');
    
    // Need to create a buffer to store the read bytes into.
    const buf = Buffer.alloc(97);
    // Arguments: File-Descriptor, Buffer, Starting Index of Buffer,
    //            Ending Index of Buffer, Starting Index to read from File,
    //            Callback.
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes) {
        if (err) { return console.error(err); }
        console.log(bytes + ' bytes read');
        // Print only read bytes to avoid junk.
        if (bytes > 0) { console.log(buf.slice(0, bytes).toString()); }
    });

    fs.close(fd, function(err) {
        if (err) { return console.error(err); }
        console.log('File closed successfully!');
    });
});
