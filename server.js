const express = require('express');
const app = express();

app.use(express.static('public'));

// Displays index.htm file on first link.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.htm');
});

// Responds to the action event thrown by form inside index.htm.
app.get('/process-get', function(req, res) {
    // Prepare output in JSON format.
    response = {
        first_name : req.query.first_name,
        last_name : req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

const server = app.listen(8081, '127.0.0.1', function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
