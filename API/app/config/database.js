const mysql = require("mysql2")

const db = mysql.createPool({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '31101999',
    database: 'cepec',
})

db.getConnection((err, conn) => {
    if (err) throw err

    console.log("Mysql Connected")
})


module.exports = db