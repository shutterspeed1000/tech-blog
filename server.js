const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const path = require('path');


const app = express();

//enable api routes
app.use(routes);
const PORT = process.env.PORT || 3001;


// Set Handlebars as the default template engine.
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');




// init models for sequelize
const models = require('./models');


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });