var client = require('./dbclientmg');
console.log('cl:', client);

var BookSchema = new client.Schema({
    name: String,
    author: String,
    publishTime: Date
});

client.model('Book', BookSchema);
