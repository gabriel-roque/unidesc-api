const { Router } = require('express');
const routes = Router();

const AlunoController = require('./controllers/AlunoController');
const ProfessorController = require('./controllers/ProfessorController');

routes.get('/alunos', AlunoController.index);
routes.post('/alunos', AlunoController.store);
routes.put('/alunos/:id', AlunoController.update);
routes.delete('/alunos/:id', AlunoController.destroy);

routes.get('/professores', ProfessorController.index);
routes.post('/professores', ProfessorController.store);
routes.put('/professores/:id', ProfessorController.update);
routes.delete('/professores/:id', ProfessorController.destroy);

module.exports = routes;
