function Hello() {
    var name;
    this.setName = function(theName) {
        name = theName;
    };

    this.sayHello = function() {
        console.log('Hello' + name);
    };
};

exports.world = function() {
    console.log('hello world');
};

module.exports = Hello;
