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