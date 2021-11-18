const eventosModel = require('../models/Eventos')

module.exports = {
    all(req, res) {
        eventosModel.all((eventos) => {
            res.send(eventos)
        })
    },

    create(req, res) {
        const evento = {
            titulo = req.body.titulo,
            descricao = req.body.descricao,
            cargaHoraria = req.body.cargaHoraria,
            numVagas = req.body.numVagas,
            dataInicio = req.body.dataInicio,
            local = req.body.local,
            segunda = req.body.segunda,
            terca = req.body.terca,
            quarta = req.body.quarta,
            quinta = req.body.quinta,
            sexta = req.body.sexta,
            sabado = req.body.sabado,
            domingo = req.body.domingo
        }

        eventosModel.create(evento, (insertedId) => {
            return res.status(201).json({ message: "Inserido com sucesso", id: insertedId })
        })
        
    },

    findEvent(req, res) {
        const {id} = req.params

        eventosModel.findEvent(id, (eventoEncontrado) => {
            if(!eventosModel) {
                return res.json({message: `Evento com o ID ${id} não encontrado`})
            }

            res.send(eventoEncontrado)
        })
    },

    findEventByName(req, res) {
        const {nome} = req.query

        eventosModel.findByName(nome, (eventoEncontrado) => {
            if(!eventosModel) {
                return res.json({message: `Evento com o nome ${nome} não encontrado`})
            }

            res.send(eventoEncontrado)
        })
    },


    deleteEvent(req, res) {
        const {id} = req.params

        eventosModel.delete(id, () => {
           
        })
    }
} 