const mongoose = require('mongoose');

const ProfessorScheme = new mongoose.Schema({
  nome: { type: String, require: true },
  matricula: { type: Number, require: true },
  telefone: { type: String, require: true },
  email: { type: String, require: true },
});

module.exports = mongoose.model('Professor', ProfessorScheme);
