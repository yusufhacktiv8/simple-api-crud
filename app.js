const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongo').MongoClient;

const MONGODB_URL = 'mongodb://localhost:27017/yusufrestapi';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

MongoClient.connect(MONGODB_URL, function(err, db) {
  app.listen(3000, function () {
    app.locals.db = db;
    console.log('Example app listening on port 3000!');
  });
});

