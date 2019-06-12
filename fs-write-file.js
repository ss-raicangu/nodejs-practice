// Asynchronous - Writing to File.
const fs = require('fs');

console.log('Going to write into new file!');

// Arguments: File-Path, Data[, Options], Callback.
// Data is string or buffer. Options are {encoding, mode, flag}.
fs.writeFile('fs-writing.txt', 'Simply Easy Learning', function(err) {
    if (err) { return console.error(err); }
    console.log('Data written successfully!');
    console.log("Let's read newly written data.");

    // Reading the data written into new file.
    fs.readFile('fs-writing.txt', function(err, data) {
        if (err) { return console.error(err); }
        console.log('Asynchronous read: ' + data);
    });
});
