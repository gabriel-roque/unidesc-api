const Professor = require('../models/Professor');
const { apibody } = require('../config/versionApi');

module.exports = {
  async index(request, response) {
    const professores = await Professor.find();
    return response.status(200).send({ ...apibody, professores });
  },

  async store(request, response) {
    const { nome, matricula, telefone, email } = request.body;

    const professor = await Professor.create({
      nome,
      matricula,
      telefone,
      email,
    });

    return response.status(201).send({ ...apibody, professor });
  },

  async update(request, response) {
    const filter = { _id: request.params.id };
    const update = { ...request.body };

    let professor = await Professor.findOneAndUpdate(filter, update, {
      new: true,
    });

    return response.status(200).send({ ...apibody, professor });
  },

  async destroy(request, response) {
    const filter = { _id: request.params.id };

    let professor = await Professor.findByIdAndDelete(filter);

    if (professor === null)
      return response
        .status(404)
        .send({ ...apibody, error: 'Professor não encontrado.' });

    return response
      .status(200)
      .send({ ...apibody, msg: 'Professor excluído.' });
  },
};
