var config = require("./config")
var server = require("./server")

var porta = config.CDC_PORT

server.listen(porta, function(){
    console.log("Rodando, rodando, oeee " + porta)
})