require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const middlewares = require('./middlewares/index');
const versionApi = require('./config/versionApi');
const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

middlewares(app);
app.use(cors());
app.use(express.json());
app.use(`${versionApi.uri.baseURL}`, routes);

app.listen(3000);
