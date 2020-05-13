const Aluno = require('../models/Aluno');
const { apibody } = require('../config/versionApi');

module.exports = {
  async index(request, response) {
    const alunos = await Aluno.find();
    return response.status(200).send({ ...apibody, alunos });
  },

  async store(request, response) {
    const { nome, matricula, semestre } = request.body;

    const aluno = await Aluno.create({
      nome,
      matricula,
      semestre,
    });

    return response.status(201).send({ ...apibody, aluno });
  },

  async update(request, response) {
    const filter = { _id: request.params.id };
    const update = { ...request.body };

    let aluno = await Aluno.findOneAndUpdate(filter, update, { new: true });

    return response.status(200).send({ ...apibody, aluno });
  },

  async destroy(request, response) {
    const filter = { _id: request.params.id };

    let aluno = await Aluno.findByIdAndDelete(filter);

    if (aluno === null)
      return response
        .status(404)
        .send({ ...apibody, error: 'Aluno não encontrado.' });

    return response.status(200).send({ ...apibody, msg: 'Aluno excluído.' });
  },
};
