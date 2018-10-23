var express = require('express');
var app = express();
var http = require('http');
var fs = require('fs');
var IO = require('socket.io');

var redis = require('redis');
var redisClient = redis.createClient;
var pub = redisClient(6379, '127.0.0.1');
var sub = redisClient(6379, '127.0.0.1');

app.use(express.static('dist'));
var server = http.createServer(app).listen(3001);
console.log("The HTTPS server is up and running");

var io = IO(server);
console.log("Socket Secure server is up and running.");

io.on('connect', function (socket) {
    socket.on('login', function (data) {
        console.log(data);
    });
    socket.on('message', function (data) {
        data = JSON.parse(data);
        switch(data.event){
            case "join":
                console.log("加入房间")
        }
    });

    socket.on('disconnect', function () {

    })
});

sub.on('subscribe', function (channel) {
    console.log('subscript:' + channel);
});

sub.on('message', function (channel, message) {
    console.log("message channel" + channel + ":" + message);
    io.to(channel).emit('message',JSON.parse(message));
})

//http.createServer(function (req, res) {
//    res.writeHead(200,{'Content-Type':'text/plain'});
//    res.end('hello world\n');
//}).listen(1377,"127.0.0.1");
//console.log('Server running at http://127.0.0.1:1337/');
//http.createServer(function (req, res) {
//    var pathname = url.parse(req.url).pathname;
//    console.log(pathname)
//    console.log(req.url);
//    console.log(req.method);
//    console.log(req.headers);
//    switch(pathname){
//        case "/index":
//            resIndex(res);
//            break;
//        case "/img":
//            resImage(res);
//            break;
//        default :
//            resDefault(res);
//            break;
//    }
//}).listen(8989);
//console.log('Server running at http://128.0.0.1:8989/');
//
//
//function resIndex(res){
//    var readPath = _dirname + "/" + url.parse("index.html").pathname;
//    var indexPage = fs.readFilSync(readPath);
//    res.writeHead(200,{'Content-Type':'text/plain'});
//    res.end(indexPage);
//}
//function resDefault(res){
//    res.writeHead(404,{'Content-Type':'text/plain'});
//    res.end("can't find ");
//}