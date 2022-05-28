const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('users', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    username: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        // validate: {
        //     len: [5, 12]
        // }
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
        // validate: {
        //     len: [8, 20]
        // }
    }
}, { db, createdAt: false, updatedAt: false })

module.exports = User