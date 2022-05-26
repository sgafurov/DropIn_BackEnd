const Sequelize = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    // user_id: {
    //     type: Sequelize.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    // },
    username: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true,
        validate: {
            len: [5, 12]
        }
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            len: [8, 20]
        }
    },
    first_name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    last_name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
}, { db, createdAt: false, updatedAt: false })

module.exports = User