const db = require('./db')
const User = require('./models/user')

//no associations at this time since we have only 1 table

module.exports = {
    db,
    User
}