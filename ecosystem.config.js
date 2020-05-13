module.exports = {
  apps: [
    {
      name: 'unidesc-api',
      script: 'index.js',
      instances: 2,
      autorestart: true,
      max_memory_restart: '1G',
    },
  ],
};
