const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('reviews', {
    review_id: {
        type: Sequelize.TEXT,
        primaryKey: true
    },
    building_id: {
        type: Sequelize.STRING, //used to be TEXT
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    comment_body: {
        type: Sequelize.STRING,
        allowNull: false
    },
    star_rating: {
        type: Sequelize.STRING,
        allowNull: false
    },
    timestamp: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { db, createdAt: false, updatedAt: false })

module.exports = Review