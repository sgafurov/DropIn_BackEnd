const db = require('./db')
const User = require('./models/user')
const Review = require('./models/review')
const Building = require('./models/building')

//no associations at this time since we have only 1 table

module.exports = {
    db,
    User
}