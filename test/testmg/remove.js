var mongoose = require('mongoose');
require('./models.js');

var Book = mongoose.model('Book');


Book.findOne({
    author: "jim1"
}, function(err, doc) {
    if (err) {
        console.log("err:", err);
        return;
    }

    if (!doc) {
        console.log("can't find:", doc);
        return;
    }

    console.log('find doc:', doc, 'will remove!');
    doc.remove();

});
