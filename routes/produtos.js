var connectionFactory = require("../db/connectionFactory")

function pegaLivros(conexao){
    return new Promise( (resolve, reject) => {
        conexao.query('SELECT * FROM livros', (err, livros) => {
            if(!err){
                resolve(livros)
            } else {
                reject(err)
            }
        })
    })
}   

module.exports = function (server) {
    server.get('/produtos', function(request, response){
    
        connectionFactory.getConnection()
            .then(conexao => pegaLivros(conexao))
            .then(livros => response.render("produtos/lista.ejs", { livros: livros }))
            .catch(err => response.send(err.message))
    });
}