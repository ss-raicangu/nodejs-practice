const express = require('express');
const cookie_parser = require('cookie-parser');

const app = express();
app.use(cookie_parser());

app.get('/', function(req, res) {
    console.log('Cookies: ', req.cookies);
});

const server = app.listen(8081, '127.0.0.1', function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
