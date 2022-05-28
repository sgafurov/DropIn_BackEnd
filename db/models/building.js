const Sequelize = require('sequelize')
const db = require('../db')

const Building = db.define('buildings', {
    building_id: {
        type: Sequelize.TEXT,
        primaryKey: true,
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    building_rating_overall: {
        type: Sequelize.DECIMAL,
        allowNull: false,
    }
}, { db, createdAt: false, updatedAt: false })

module.exports = Building