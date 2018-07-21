require("dotenv").config()

var objetoCongig = {
    "CDC_PORT": process.env.CDC_PORT || 3000,
    "DB_PORT": process.env.DB_PORT || 3306,
}

module.exports = objetoCongig;