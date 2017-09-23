
var express = require('express'),
path = require('path'),
fs = require('fs');

var app = express();
var staticRoot = __dirname + '/';

app.set('port', (process.env.PORT || 3000));

app.use(express.static(staticRoot));

app.use(function(req, res, next){

// if the request is not html then move along
var accept = req.accepts('html', 'json', 'xml');
if(accept !== 'html'){
    return next();
}

// if the request has a '.' assume that it's for a file, move along
var ext = path.extname(req.path);
if (ext !== ''){
    return next();
}

fs.createReadStream(staticRoot + 'index.html').pipe(res);

});

app.listen(app.get('port'), function() {
console.log('app running on port', app.get('port'));
});






/*
var express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
root = '/',
port = process.env.Port || 3000,
app = express(),


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'build')));

//serving api routes

app.get('*', (req, res) => {
res.sendFile('build/index.html', { root });
})
app.listen(port, () => console.log('API running on localhost:${port}'));



/*
var express = require('express'),
    bodyParser = require('body-parser'),
    path = require('path'),
    root = '/',
    port = process.env.Port || 3000,
    app = express();

//  connection cli
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://mtomawe-db:awgtNvUx2xLGHSkgzVuOEHosWQE3wUKFwElCxJggrwpGR8G2GasUpq09qJT5pJyPkZKvVfOq6KF19sz0sZM88g==@mtomawe-db.documents.azure.com:10255/?ssl=true';


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'build')));

app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root });
})
app.listen(port, () => console.log('API running on localhost:${port}'));
*/