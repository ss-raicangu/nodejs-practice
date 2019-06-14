const fs = require('fs');
const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    const working_process = child_process.exec('node support.js ' + i, function(err, stdout, stderr) {
        if (err) {
            console.log(err.stack);
            console.log('Error code: ' + err.code);
            console.log('Signal received: ' + err.signal);
        }
        else {
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
        }
    });
    
    working_process.on('exit', function(code) {
        console.log('Child process exited with exit code ' + code);
    });
}
