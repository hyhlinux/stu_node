var mongoose = require('mongoose');
require('./models.js');

var Book = mongoose.model('Book');
console.log('model Book:', Book);

var book = new Book({
    name: "book1",
    author: "author1",
    publishTime: new Date()
});

book.author = 'jim1';

book.save(function(err) {
    console.log("save status:", err ? 'failed' : 'success');
});
