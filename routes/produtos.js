module.exports = function (server) {
    server.get('/produtos', function(request, response){
        
        var mysql = require('mysql')
        var con = mysql.createConnection({
            database: "cdc",
            user: "root",
            password: "",
            port: 3306
        })

        con.query('SELECT * FROM livros', function (err, livros){
            con.end()
            
            if(!err){
                response.render("produtos/lista.ejs", {
                    livros: livros
                })
            } else {
                response.send(err)
            }
        });

        
        // var livros = [
        //     {
        //         titulo: "As Aventuras de Rolindo",
        //         preco: 50,
        //         descricao: "O terror do PHP"
        //     },
        //     {
        //         titulo: "As Aventuras de Rolindo 2",
        //         preco: 60,
        //         descricao: "O servidor agora é outro"
        //     }
        // ]
    });
}