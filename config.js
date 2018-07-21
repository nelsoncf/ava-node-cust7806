require("dotenv").config()

var objetoCongig = {
    "CDC_PORT": process.env.CDC_PORT || 3000,
    "DB_PORT": process.env.DB_PORT || 3306,
    "DB_NAME": process.env.DB_NAME || "cdc",
    "DB_USER": process.env.DB_USER || "root",
    "DB_PASS": process.env.DB_PASSWORD || "",
}

module.exports = objetoCongig;