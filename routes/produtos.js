module.exports = function (server) {
    server.get('/produtos', function(request, response){
        var livros = [
            {
                titulo: "As Aventuras de Rolindo",
                preco: 50,
                descricao: "O terror do PHP"
            },
            {
                titulo: "As Aventuras de Rolindo 2",
                preco: 60,
                descricao: "O servidor agora é outro"
            }
        ]
        response.render("produtos/lista.ejs", {
            livros: livros
        })
    });
}