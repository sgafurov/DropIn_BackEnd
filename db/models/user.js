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
    },
    user_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    //https://stackoverflow.com/questions/41860792/how-can-i-have-a-datatype-of-array-in-mysql-sequelize-instance
    favorites: {
        type: Sequelize.STRING,
        allowNull: true,
        // get() {
        //     return this.getDataValue('favorites').split(';')
        // },
        // set(val) {
        //    this.setDataValue('favorites',val.join(';'));
        // },
    }
}, { db, createdAt: false, updatedAt: false })

module.exports = User