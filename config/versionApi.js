const VERSION = 'v1';

const uri = {
  version: VERSION,
  baseURl: `/${VERSION}/api`,
};

const header = {
  version: VERSION,
  origin: 'unidesc-api',
};

const apibody = {
  version: VERSION,
  origin: 'unidesc-api',
};

module.exports = { uri, header, apibody };