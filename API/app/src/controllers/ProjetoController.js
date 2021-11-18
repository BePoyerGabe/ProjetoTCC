const projetosModel = require('../models/Projetos')

module.exports = {
    all(req, res) {
        projetosModel.all((projetos) => {
            return res.send(projetos)
        })
    },

    create(req, res) {
        const novoProjeto = {
            titulo = req.body.titulo,
            instituicao = req.body.instituicao,
            depart = req.body.departamento,
            dataInicio = req.body.dataInicio,
            dataTermino = req.body.dataTermino,
            numBolsas = req.body.qtdBolsistas,
            areaTematica = req.body.areaTematica,
            descripcao = req.body.descricao
        }

        projetosModel.create(novoProjeto, (insertId) => {
            return res.status(201).json({ message: "Inserido com sucesso", id: insertId })
        })
    },

    findProject(req, res) {
        const {id} = req.params

        ProjetosModel.findProjet(id, (ProjetoEncontrado) => {
            if(!ProjetosModel) {
                return res.json({message: `Projeto com o ID ${id} não encontrado`})
            }

            res.send(ProjetoEncontrado)
        })
    },

    findProjectByName(req, res) {
        const {nome} = req.query

        ProjetosModel.findByName(nome, (ProjetoEncontrado) => {
            if(!ProjetosModel) {
                return res.json({message: `Projeto com o nome ${nome} não encontrado`})
            }

            res.send(ProjetoEncontrado)
        })
    },


    deleteProject(req, res) {
        const {id} = req.params

        eventosModel.delete(id, () => {
           
        })
    }
}