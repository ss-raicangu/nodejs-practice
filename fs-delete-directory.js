// Asynchronous - Delete Directory.
const fs = require('fs');

console.log('Going to delete directory ./tmp');
// Directory must be empty to remove.
fs.rmdir('./tmp', function(err) {
    if (err) { return console.error(err); }
    console.log('Successfully deleted directory.');
});
