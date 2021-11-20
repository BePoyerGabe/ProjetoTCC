const db = require('../../config/database')

module.exports = {
    all(callback) {
        const sqlQuery = "SELECT * FROM Alunos"
        
        db.query(sqlQuery, (err, result) => {
            if (err) throw new Error("erro ao consultar alunos ", err)

            callback(result)
        })
    },
    create(aluno, callback) {
        const sqlQuery = "INSERT INTO Alunos VALUES(?, ?, ?, ?, ?, ?, ?, ?)"

        db.query(sqlQuery, aluno,(err, result) => {
            if (err) throw new Error("erro ao criar aluno ", err)

            callback(result.insertId)
        })
    },

     findAluno(id, callback) {
        const sqlQuery = "SELECT * FROM Alunos WHERE id = ?"

        db.query(sqlQuery, [id], (err, result) => {
            if(err) throw new Error("Erro ao encontrar aluno específico", err)

            callback(result)
        })
    },
    
    findAlunosByName(nome, callback) {
        const sqlQuery = "SELECT * FROM Alunos WHERE titulo = ?"

        db.query(sqlQuery, [nome], (err, result) => {
            if(err) throw new Error("Erro ao encontrar aluno específico", err)

            callback(result)
        })
    },

    delete(id, callback) {
        const sqlQuery = "DELETE FROM Alunos WHERE id = ?"

        db.query(sqlQuery, [id], (err, result) => {
            if(err) throw new Error("Erro ao excluir aluno do sistema", err)

            callback()
        })
    }
}


