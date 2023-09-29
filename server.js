const express = require('express');
const sequelize = require('./controllers/connection');
const routes = require('./api');

const app = express();

//enable api routes
app.use(routes);
const PORT = process.env.PORT || 3001;

// init models for sequelize
const models = require('./models');


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });