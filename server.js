const express = require('express');
const app = express();

// Responds with 'Hello World' on the homepage.
app.get('/', function(req, res) {
    console.log('Got a GET request for the homepage.');
    res.send('Hello World');
});

// Responds to a POST request for the homepage.
app.post('/', function(req, res) {
    console.log('Got a POST request for the homepage.');
    res.send('Hello POST');
});

// Responds to a DELETE request for the /del-user page.
app.delete('/del-user', function(req, res) {
    console.log('Got a DELETE request for /del-user.');
    res.send('Hello DELETE');
});

// Responds to a GET request for the /list-user page.
app.get('/list-user', function(req, res) {
    console.log('Got a GET request for /list-user.');
    res.send('Page Listing');
});

// Responds to a GET request for /abcd, /abxcd, /ab123cd, and so on.
app.get('/ab*cd', function(req, res) {
    console.log('Got a GET request for /ab*cd');
    res.send('Page Pattern Match');
});

const server = app.listen(8081, '127.0.0.1', function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
