const pkg = require('../../package.json')
require('dotenv').config()

const Sequelize = require('sequelize');
const db_url = process.env.DATABASE_URL
const db_host = process.env.HOST

const db = new Sequelize(db_url, {
  host: db_host,
  port: 5432,
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false
    },
  },
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db