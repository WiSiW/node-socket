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
