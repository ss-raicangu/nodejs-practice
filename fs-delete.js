// Synchronous - Deleting File.
const fs = require('fs');

fs.open('temp.txt', 'w', function(err, fd) {
    if (err) { return console.error(err); }
    console.log('File ' + fd + ' created successfully.');

    console.log('Going to delete a file.');
    fs.unlink('temp.txt', function(err) {
        if (err) { return console.error(err); }
        console.log('File deleted successfully!');
    });

    fs.close(fd, function(err) {
        if (err) { return console.error(err); }
        console.log('Closed file ' + fd + ' successfully.');
    });
});
