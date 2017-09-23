
var express = require('express'),
bodyParser = require('body-parser'),
path = require('path'),
root = '/',
port = process.env.Port || 3000,
app = express(),
routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'build')));

//serving api routes
app.use('/api',routes);
app.get('*', (req, res) => {
res.sendFile('build/index.html', { root });
})
app.listen(port, () => console.log('API running on localhost:${port}'));


/*
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
*/