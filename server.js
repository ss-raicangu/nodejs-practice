const express = require('express');
const body_parser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const app = express(); // Create an express application.
app.use(express.static('public'));

// Displays index.htm when link is opened.
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.htm');
});

const url_encoded_parser = body_parser.urlencoded({ extended : false }); // Create application/x-www-form-urlencoded parser.
const upload = multer({ dest : 'uploads/' }); // Middleware to handle multi-part form data.

// Responds to the action event thrown by form inside index.htm.
app.post('/file-upload', url_encoded_parser, upload.single('file'), function(req, res) {
    // Debugging the various properties of a Multer file object.
    console.log(req.file.fieldname);
    console.log(req.file.originalname);    
    console.log(req.file.path);
    console.log(req.file.mimetype);

    // Writing file into public/uploads/ directory.
    const file = __dirname + '/public/uploads/' + req.file.originalname;
    fs.readFile(req.file.path, function(err, data) {
        fs.writeFile(file, data, function(err) {
            if (err) { return console.error(err); }
            response = {
                message: 'File uploaded successfully',
                filename: req.file.originalname
            };
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });
});

const server = app.listen(8081, '127.0.0.1', function() {
    const host = server.address().address;
    const port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
