const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');


const routes = require('./controllers');
const sequelize = require('./config/connection');
// Import the custom helper methods
// const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Incorporate the custom helper methods
const hbs = exphbs.create({ });

// setup session for logins
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});