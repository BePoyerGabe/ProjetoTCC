const db = require('../../config/database')

module.exports = {
    all(callback) {
        const sqlQuery = "SELECT * FROM Coordenador"
        
        db.query(sqlQuery, (err, result) => {
            if (err) throw new Error("erro ao consultar coordenadores ", err)

            callback(result)
        })
    }
}


