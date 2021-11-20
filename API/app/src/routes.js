const { Router } = require('express')
const ProjetoControllers = require('./controllers/ProjetoController')
const EventosControllers = require('./controllers/EventosController')
const AlunosController = require('./controllers/AlunosController')

const routes = Router()

routes.get('/eventos', EventosControllers.all)
routes.get('/eventos/:id', EventosControllers.findEvent)
routes.post('/eventos', EventosControllers.create)
routes.delete('/eventos/:id/delete', EventosControllers.deleteEvent)
routes.put('/eventos/:id/edit', EventosControllers.editEvent)


routes.get('/projetos', ProjetoControllers.all)
routes.get('/projetos/:id', ProjetoControllers.findProject)
routes.get('/projetos', ProjetoControllers.findProjectByName)
routes.post('/projetos', ProjetoControllers.create)
routes.delete('/projetos/:id/delete', ProjetoControllers.deleteProject)

routes.get('/alunos', AlunosController.all)
routes.get('/alunos/:id', AlunosController.findAluno)
routes.get('/alunos', AlunosController.findAlunoByName)
routes.post('/alunos', AlunosController.create)
routes.delete('/alunos/:id/delete', AlunosController.deleteAluno)


module.exports = routes

