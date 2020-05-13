const mongoose = require('mongoose');

const TurmaScheme = new mongoose.Schema({
  codigo: { type: Number, require: true },
  lider: { type: String, require: true },
  email: { type: String, require: true },
});

module.exports = mongoose.model('Turmas', TurmaScheme);
