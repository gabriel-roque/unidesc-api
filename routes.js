const { Router } = require('express');
const AlunoController = require('./controllers/AlunoController');

const routes = Router();

routes.get('/alunos', AlunoController.index);
routes.post('/alunos', AlunoController.store);
routes.put('/alunos/:id', AlunoController.update);
routes.delete('/alunos/:id', AlunoController.destroy);

module.exports = routes;
