const { Router } = require('express')
const ProjetoControllers = require('./controllers/ProjetoController')
const EventosControllers = require('./controllers/EventosController')

const routes = Router()

routes.get('/eventos', EventosControllers.all)
routes.get('/eventos/:id', EventosControllers.findEvent)
routes.post('/eventos', EventosControllers.create)
routes.delete('/eventos/:id/delete', EventosControllers.deleteEvent)


routes.get('/projetos', ProjetoControllers.all)
routes.get('/projetos/:id', ProjetoControllers.findEvent)
routes.get('/projetos', ProjetoControllers)
routes.post('/projetos', ProjetoControllers.create)
routes.delete('/projetos/:id/delete', ProjetoControllers.deleteEvent)



module.exports = routes

