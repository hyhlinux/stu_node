var http = require('http');
var url = require('url');

function start(route) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log('path:', pathName);
        route(pathName);
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write('hello');
        response.end();
    }
    http.createServer(onRequest).listen(8000);
    console.log('ser start');
}
exports.start = start;
// start();
