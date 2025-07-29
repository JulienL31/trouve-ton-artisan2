const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ttrouvart', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
