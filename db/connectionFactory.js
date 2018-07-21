var config = require("../config")


var mysql = require('mysql')
var conPool = mysql.createPool({
    database: config.DB_NAME,
    user: config.DB_USER,
    password: config.DB_PASS,
    port: config.DB_PORT
})

module.exports = {
    getConnection: () =>
        new Promise((resolve, reject) => {
            conPool.getConnection((err, conexao) => {
                if (!err) {
                    resolve(conexao)
                } else {
                    reject(err)
                }
            })
        })
}


