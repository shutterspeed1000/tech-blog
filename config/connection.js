const Sequelize = require('sequelize');
require('dotenv').config()


// Create a connection object
const sequelize = new Sequelize(process.env.JAWDB_URL);

module.exports = sequelize;
