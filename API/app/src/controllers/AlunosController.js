const alunosModel = require('../models/Alunos')

module.exports = {
    all(req, res) {
        alunosModel.all((alunos) => {
            return res.send(alunos)
        })
    },

    create(req, res) {
        const novoAluno = {
            nome = req.body.nome,
            dataNascim = req.body.nascimento, 
            genero = req.body.sexo,
            nivelEscolar = req.body.escolaridade,
            telefone = req.body.telefone,
            email = req.body.email,
            cpf = req.body.cpf,
        }

        alunosModel.create(novoAluno, (insertId) => {
            return res.status(201).json({ message: "Inserido com sucesso", id: insertId })
        })
    },

    findProject(req, res) {
        const {id} = req.params

        alunosModel.findProjet(id, (alunoEncontrado) => {
            if(!alunoEncontrado) {
                return res.json({message: `Aluno com o ID ${id} não encontrado`})
            }

            res.send(alunoEncontrado)
        })
    },

    findProjectByName(req, res) {
        const {nome} = req.query

        alunosModel.findByName(nome, (alunoEncontrado) => {
            if(!alunoEncontrado) {
                return res.json({message: `Aluno com o nome ${nome} não encontrado`})
            }

            res.send(alunoEncontrado)
        })
    },


    deleteProject(req, res) {
        const {id} = req.params

        eventosModel.delete(id, () => {
           
        })
    }

}