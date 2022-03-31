const Sequelize = require('sequelize')
const db = require('./database')

//define the database table name along with the table columns and types
const User = db.define('users', {
    user_id:{type: Sequelize.STRING},
    username: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    firstname: {type: Sequelize.STRING},
    lastname: {type: Sequelize.STRING}
})

module.exports = User