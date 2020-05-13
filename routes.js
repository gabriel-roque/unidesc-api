require('dotenv').config();

const { Router } = require('express');
const { uri } = require('./config/versionApi');

const routes = Router();

const AlunoController = require('./controllers/AlunoController');
const ProfessorController = require('./controllers/ProfessorController');
const TurmaController = require('./controllers/TurmaController');

routes.get('/alunos', AlunoController.index);
routes.post('/alunos', AlunoController.store);
routes.put('/alunos/:id', AlunoController.update);
routes.delete('/alunos/:id', AlunoController.destroy);

routes.get('/professores', ProfessorController.index);
routes.post('/professores', ProfessorController.store);
routes.put('/professores/:id', ProfessorController.update);
routes.delete('/professores/:id', ProfessorController.destroy);

routes.get('/turmas', TurmaController.index);
routes.post('/turmas', TurmaController.store);
routes.put('/turmas/:id', TurmaController.update);
routes.delete('/turmas/:id', TurmaController.destroy);

routes.get('/', function (request, response) {
  response.redirect(`${process.env.APP_URL}${uri.baseURL}/alunos`);
});

module.exports = routes;
