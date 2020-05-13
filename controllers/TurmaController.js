const Turma = require('../models/Turma');
const { apibody } = require('../config/versionApi');

module.exports = {
  async index(request, response) {
    const turmas = await Turma.find();
    return response.status(200).send({ ...apibody, turmas });
  },

  async store(request, response) {
    const { codigo, lider, email } = request.body;

    const turma = await Turma.create({
      codigo,
      lider,
      email,
    });

    return response.status(201).send({ ...apibody, turma });
  },

  async update(request, response) {
    const filter = { _id: request.params.id };
    const update = { ...request.body };

    let turma = await Turma.findOneAndUpdate(filter, update, { new: true });

    return response.status(200).send({ ...apibody, turma });
  },

  async destroy(request, response) {
    const filter = { _id: request.params.id };

    let turma = await Turma.findByIdAndDelete(filter);

    if (turma === null)
      return response
        .status(404)
        .send({ ...apibody, error: 'Turma não encontrado.' });

    return response.status(200).send({ ...apibody, msg: 'Turma excluída.' });
  },
};
