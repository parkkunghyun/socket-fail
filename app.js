// module setting

var express = require('express');
var app = express();
var socket = require('socket.io');
var path = require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    res.render('index');
});

var server = app.listen(3000,function(){
    console.log('server run...!');
}); //socket.io 기술

var io = server;

io.on('connection',function(socket){
    socket.on('send message', function (msg){
        console.log('recv message', msg);

        socket.emit('new message',msg);
    })
});