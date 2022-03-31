const Sequelize = require('sequelize')
const db = require('./database')

const Address = db.define('addresses', {
    address_id: {},
    address: {type: Sequelize.VARCHAR(100)},
    address_rating: {}
})