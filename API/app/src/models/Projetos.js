const db = require('../../config/database')

module.exports = {
    all(callback) {
        const sqlQuery = "SELECT * FROM Projetos"
        
        db.query(sqlQuery, (err, result) => {
            if (err) throw new Error("erro ao consultar projetos ", err)

            callback(result)
        })
    },
    create(projeto, callback) {
        const sqlQuery = "INSERT INTO Projetos VALUES(?, ?, ?, ?, ?, ?, ?, ?)"

        db.query(sqlQuery, projeto,(err, result) => {
            if (err) throw new Error("erro ao criar o projeto ", err)

            callback(result.insertId)
        })
    },

     findProject(id, callback) {
        const sqlQuery = "SELECT * FROM Projetos WHERE id = ?"

        db.query(sqlQuery, [id], (err, result) => {
            if(err) throw new Error("Erro ao encontrar Projeto específico", err)

            callback(result)
        })
    },
    
    findProjectsByName(nome, callback) {
        const sqlQuery = "SELECT * FROM Projetos WHERE titulo = ?"

        db.query(sqlQuery, [nome], (err, result) => {
            if(err) throw new Error("Erro ao encontrar projeto específico", err)

            callback(result)
        })
    },

    delete(id, callback) {
        const sqlQuery = "DELETE FROM Projetos WHERE id = ?"

        db.query(sqlQuery, [id], (err, result) => {
            if(err) throw new Error("Erro ao excluir projeto do sistema", err)

            callback()
        })
    }
}


