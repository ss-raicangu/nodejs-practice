const fs = require('fs');
const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    const worker_process = child_process.spawn('node', ['support.js', i]);
    
    worker_process.stdout.on('data', function(data) {
        console.log('stdout: ' + data);
    });

    worker_process.stderr.on('data', function(data) {
        console.log('stderr: ' + data);
    });

    worker_process.on('close', function(code) {
        console.log('Child process exited with exit code ' + code);
    });
}
