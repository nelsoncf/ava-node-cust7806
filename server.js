var express = require("express")
var config = require("./config")

var server = express()

server.get('/', function(request, response){
    response.render("index.ejs")
});

require('./routes/produtos.js')(server)

server.use(express.static("./public"))

module.exports = server