const express = require('express');
const app = express();

app.use(express.static('public'));

// Displays index.htm when link is opened.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.htm');
});

// Create application/x-www-form-urlencoded parser.
const body_parser = require('body-parser');
const url_encoded_parser = body_parser.urlencoded({ extended : false });
// Responds to the action event thrown by form inside index.htm.
app.post('/process-post', url_encoded_parser, function(req, res) {
    // Prepare output in JSON format.
    response = {
        first_name : req.body.first_name,
        last_name : req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

const server = app.listen(8081, '127.0.0.1', function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
