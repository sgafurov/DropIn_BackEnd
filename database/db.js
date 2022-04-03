const Sequelize = require("sequelize")

const db = new Sequelize("postgresql://localhost:5432/dropin_db")

module.exports = db