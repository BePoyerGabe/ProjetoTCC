const db = require('../../config/database')

module.exports = {
    all(callback) {
        const sqlQuery = "SELECT * FROM Eventos"
        
        db.query(sqlQuery, (err, result) => {
            if (err) throw new Error("erro ao buscar eventos", err)

            callback(result)
        })
    },

    create(evento, callback) {
        const sqlQuery = "INSERT INTO Eventos VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)"

        db.query(sqlQuery, evento,(err, result) => {
            if (err) throw new Error("erro ao criar evento ", err)

            callback(result.insertId)
        })
    },

    findEvent(id, callback) {
        const sqlQuery = "SELECT * FROM Eventos WHERE id = ?"

        db.query(sqlQuery, [id], (err, result) => {
            if(err) throw new Error("Erro ao encontrar evento específico", err)

            callback(result)
        })
    },
    
    findEventsByName(nome, callback) {
        const sqlQuery = "SELECT * FROM Eventos WHERE titulo = ?"

        db.query(sqlQuery, [nome], (err, result) => {
            if(err) throw new Error("Erro ao encontrar evento específico", err)

            callback(result)
        })
    },

    delete(id, callback) {
        const sqlQuery = "DELETE FROM Eventos WHERE id = ?"

        db.query(sqlQuery, [id], (err, result) => {
            if(err) throw new Error("Erro ao excluir evento do sistema", err)

            callback()
        })
    }

}
