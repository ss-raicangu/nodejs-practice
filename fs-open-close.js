// Asynchronous - Opening File.
const fs = require('fs');

console.log('Going to open file!');
// Arguments: File-Path, Behaviour-Flags[, File-Mode], Callback.
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) { return console.error(err); }
    console.log('File opened successfully!');

    // Asynchronous - Closing File.
    fs.close(fd, function(err) {
        if (err) { return console.error(err); }
        console.log('File closed successfully!');
    });
});
