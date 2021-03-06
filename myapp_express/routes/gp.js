/**
 * Created by apple on 2017/7/13.
 */

var express = require('express');
var router = express.Router();
var gplay = require('../library/google-play-scraper');

function getClientIp(req) {
    // console.log('x-forwarded-for:', req.headers['x-forwarded-for']);
    // console.log('connection.remoteAddress:', req.connection.remoteAddress);
    // console.log('req.socket.remoteAddress :', req.socket.remoteAddress);
    // console.log('req.connection.socket.remoteAddress:', req.connection.socket.remoteAddress);
    return req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;
}

//测试中间件
var requestTime = function (req, res, next) {
    //给req动态绑定属性
    console.log("cli-req:", getClientIp(req));
    req.requestTime = Date.now()
    console.log(req.requestTime)
    next()
}

router.use(requestTime)



//gp

router.get('/', function(req, res){
    var responseText = 'hello workld!<br>'
    responseText += '<small>requested at:' + req.requestTime + '</small>'
    res.send(responseText)
});


router.get('/search/:q/:num', function(req, res){
    console.log('params:', req.params['q']);
    gplay.search({
        term: req.params['q'],
        proxy:"http://192.168.6.1:8118",
        num: req.params['num']
    }).then(console.log, console.log);
    res.send(req.params);

});

router.get('/detail/:id', function(req, res){
    console.log('params:', req.params['id']);
    gplay.app({
        proxy:"http://192.168.9.46:1087",
        appId: req.params['id']
    }).then(console.log, console.log);
    res.send(req.params);

});

router.get('/list/game', function (req, res) {
    gplay.list({
        category: gplay.category.GAME_ACTION,
        collection: gplay.collection.TOP_FREE,
        num: 10
    }).then(console.log, console.log);
});

module.exports = router;
