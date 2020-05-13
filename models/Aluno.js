const mongoose = require('mongoose');

const AlunoScheme = new mongoose.Schema({
  nome: { type: String, require: true },
  matricula: { type: Number, require: true },
  semestre: { type: Number, require: true },
});

module.exports = mongoose.model('Alunos', AlunoScheme);
