var express = require("express")
var config = require("./config")

var server = express()
var expressValidator = require('express-validator')

server.use(expressValidator())
server.use(express.urlencoded())
server.use(express.json())

server.get('/', function(request, response){
    response.render("index.ejs")
});

require('./routes/produtos.js')(server)

server.use(express.static("./public"))

module.exports = server