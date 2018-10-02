#!/usr/bin/env node

var express = require('express');
var app = express();
var pug = require('pug');
var fs = require("fs");

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.get('/', function (req, res) {
  fs.readFile( __dirname + "/" + "info.html", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
  });
})

app.get('/info', function (req, res) {
  var date = new Date();
  var html = pug.renderFile(__dirname +  "/" + "template.pug", {
    name: 'RESTful nodejs Service',
    dirname: __dirname,
    filename: __filename,
    time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "(" + date.getTime() + ")",
    in_time: date.getHours() + ":" + req.query.in_minute + ":" + "00" + "(" + date.getTime() + ")",
  });
  res.end(html);
})

app.get('/hello', function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var data =
    "OUTPUT: " + "\n" +
    "DIRNAME: " + __dirname + "\n";
  res.end(data);
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("\n  Data Directory: " + __dirname + "\n\n");
  console.log("Example app listening at http://%s:%s", host, port)

})