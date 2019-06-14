const fs = require('fs');
const child_process = require('child_process');

for (let i = 0; i < 3; i++) {
    const worker_process = child_process.fork('support.js', [i]);

    worker_process.on('close', function(code) {
        console.log('Child process exited with exit code ' + code);
    });
}
