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
//routes = require('./routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(root, 'build')));

//serving api routes
//app.use('/api',routes)
//start for mongobd

/*
app.get('*', (req, res) => {
    res.sendFile('build/index.html', { root });
})
app.listen(port, () => console.log('API running on localhost:${port}'));


var insertDocument = function (db, callback) {
    db.collection('families').insertOne({
        "id": "AndersenFamily",
        "lastName": "Andersen",
        "parents": [
            { "firstName": "Thomas" },
            { "firstName": "Mary Kay" }
        ],
        "children": [
            { "firstName": "John", "gender": "male", "grade": 7 }
        ],
        "pets": [
            { "givenName": "Fluffy" }
        ],
        "address": { "country": "USA", "state": "WA", "city": "Seattle" }
    }, function (err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the families collection.");
        callback();
    });
};

var findFamilies = function (db, callback) {
    var cursor = db.collection('families').find();
    cursor.each(function (err, doc) {
        assert.equal(err, null);
        if (doc != null) {
          console.dir(doc);
        } else {
            callback();
        }
    });
};

var updateFamilies = function (db, callback) {
    db.collection('families').updateOne(
        { "lastName": "Andersen" },
        {
            $set: {
                "pets": [
                    { "givenName": "Fluffy" },
                    { "givenName": "Rocky" }
                ]
            },
            $currentDate: { "lastModified": true }
        }, function (err, results) {
            console.log(results);
            callback();
        });
};

var removeFamilies = function (db, callback) {
    db.collection('families').deleteMany(
        { "lastName": "Andersen" },
        function (err, results) {
            console.log(results);
            callback();
        }
    );
};

MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    insertDocument(db, function () {
        findFamilies(db, function () {
            updateFamilies(db, function () {
                removeFamilies(db, function () {
                    db.close();
                });
            });
        });
    });
});
//end of mongodb
*/
