const Sequelize = require('sequelize');
require('dotenv').config()


// Create a connection object
const sequelize = new Sequelize(process.env.JAWSDB_URL);

module.exports = sequelize;
