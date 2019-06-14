const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.get('/list-users', function(req, res) {
    fs.readFile(path.join(__dirname, 'users.json'), 'utf8', function(err, data) {
        console.log(data);
        res.end(data);
    });
});

const server = app.listen(8081, '127.0.0.1', function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
