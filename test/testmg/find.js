var mongoose = require('mongoose');
require('./models.js');

var Book = mongoose.model('Book');


//findone

// Book.findOne({
//     author: "jim1"
// }, function(err, docs) {
//     if (err) {
//         console.log("err:", err);
//         return;
//     }
//
//     if (!docs) {
//         console.log("can't find:", docs);
//         return;
//     }
//
//     console.log('find doc:', docs);
// });

//findall
// Book.find({}, function(err, docs) {
//     if (err) {
//         console.log("err:", err);
//         return;
//     }
//
//     if (!docs) {
//         console.log("can't find:", docs);
//         return;
//     }
//
//     console.log('find doc:', docs);
// });


var cond = {
    $or: [{
            author: 'jim2'
        },
        {
            author: 'jim1'
        }
    ]
};

Book.find(cond, function(err, docs) {
    if (err) {
        console.log("err:", err);
        return;
    }

    if (!docs) {
        console.log("can't find:", docs);
        return;
    }

    console.log('cond:', cond, 'result:', docs);
});
