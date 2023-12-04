const express = require('express');
const cors = require('cors');
const path = require('path');
const apiRoute = require('./routes/index.js');

const setupServer = () => {
  const app = express();
  app.use(express.json());
  app.use(
    cors({
      origin: 'http://localhost:5173',
    })
  );
  app.use('/', express.static(path.join(__dirname, '../client/dist')));
  app.use('/api/v1', apiRoute);

  return app;
};

module.exports = { setupServer };
