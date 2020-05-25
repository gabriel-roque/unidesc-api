const { uri, apibody } = require('../config/versionApi');

module.exports = {
  async index(resquest, response) {
    await response.status(200).send({
      ...apibody,
      documentation: 'https://github.com/gabriel-roque/unidesc-api',
      resources: {
        alunos: `${process.env.APP_URL}${uri.baseURL}/alunos`,
        professores: `${process.env.APP_URL}${uri.baseURL}/professores`,
        turmas: `${process.env.APP_URL}${uri.baseURL}/turmas`,
      },
    });
  },
};
