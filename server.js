const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.get('/:id', function(req, res) {
    // First read existing users.
    fs.readFile(path.join(__dirname, 'users.json'), 'utf8', function(err, data) {
        const users = JSON.parse(data);
        const user = users['user' + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

const server = app.listen(8081, '127.0.0.1', function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
