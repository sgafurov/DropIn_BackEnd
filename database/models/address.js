const Sequelize = require('sequelize')
const db = require('../db')

const Address = db.define('address', {
    address_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    address_place_id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    address_rating: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    }
}, {
    tableName: "address"
})

module.exports = Address