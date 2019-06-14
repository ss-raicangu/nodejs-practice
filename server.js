const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.htm'));
});

const id = 2;
app.post('/delete-user', function(req, res) {
    // First read existing users.
    fs.readFile(path.join(__dirname, 'users.json'), 'utf8', function(err, data) {
        data = JSON.parse(data);
        delete data['user' + id];
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

const server = app.listen(8081, '127.0.0.1', function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
