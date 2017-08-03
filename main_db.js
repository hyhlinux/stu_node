var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost/test'

var insertData = function(db, callback) {
    var collection = db.collection('test_hyh');
    var data = {
        "name": "qq",
    }
    collection.insert(data, function(err, result) {
        if (err) {
            console.log(err);
        }
        callback(result);
    });
}

MongoClient.connect(DB_CONN_STR, function(err, db) {
    console.log(err, db);
    console.log("连接成功！");
    insertData(db, function(result) {
        console.log(result);
        db.close();
    });
});
