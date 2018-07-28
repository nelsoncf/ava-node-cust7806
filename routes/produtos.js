var connectionFactory = require("../db/connectionFactory")
var queryString = require('query-string')

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

function salvaLivro(conexao, livro){
    return new Promise( (resolve, reject) => {
        conexao.query('INSERT INTO livros SET ?', livro, (err) => {
            if(!err){
                resolve()
            } else {
                reject(err)
            }
        })
    })
}   

module.exports = function (server) {
    server.get('/produtos', async function(request, response){
    
        // connectionFactory.getConnection()
        //     .then(conexao => pegaLivros(conexao))
        //     .then(livros => response.render("produtos/lista.ejs", { livros: livros }))
        //     .catch(err => response.send(err.message))

        try {
            var conexao = await connectionFactory.getConnection()
            var livros = await pegaLivros(conexao)
            response.render("produtos/lista.ejs", { livros: livros })
        } catch (err) {
            response.send(err.message)
        }
    });

    server.get('/produtos/form', function(req, res){
        res.render("produtos/form.ejs", { validationErrors: [] })
    })

    server.post('/produtos', async function(req, res){
        var livro = req.body
        
        
        req.assert("titulo", "Titulo inválido").notEmpty()
        req.assert("preco", "Preço inválido").notEmpty()
        req.assert("preco", "Preço obrigatório").isNumeric()

        try{
            await req.asyncValidationErrors()

            var conexao = await connectionFactory.getConnection()
          
            try {
                await salvaLivro(conexao, livro)
                res.redirect('/produtos')
            } catch(erroDB){
                res.send(erroDB)
            }

        } catch(validationErrors) {
            res.render('produtos/form.ejs', {
                validationErrors
            })
        }
    })
}