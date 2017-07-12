var express = require('express');
var router = express.Router();

//db
var MongoClient = require('mongodb').MongoClient




router.get('/', function(req, res){
  console.log('db test');
  MongoClient.connect('mongodb://localhost:27017/apkpure', function (err, db) {
    if (err) throw err

    console.log('db', db);
    db.collection('search').find().toArray(function (err, result) {
      if (err) throw err
      console.log(result);
    });
  });
  res.send('db test')
});
module.exports = router;
