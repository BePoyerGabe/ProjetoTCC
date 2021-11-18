const coordenadorModel = require('../models/Coordenador')

module.exports = {
    all(req, res) {
        coordenadorModel.all((coordenadores) => {
            return res.send(coordenadores)
        })
    },

    create(req, res) {

    }
}