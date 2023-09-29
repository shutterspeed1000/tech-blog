const express = require('express');
const sequelize = require('./controllers/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// init models for sequelize
const models = require('./models');


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });