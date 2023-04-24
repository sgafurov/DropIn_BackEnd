//HEROKU
// const express = require('express')
// const morgan = require('morgan')
// const { db } = require('./db')
// const cors = require('cors')
// const bodyParser = require('body-parser');

// const app = express()
// const PORT = process.env.PORT || 8080

// app.use(morgan('dev'))
// app.use(express.json())
// app.use(cors())

// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

// app.use('/', require('./api/user'))
// app.use('/', require('./api/review'))
// app.use('/', require('./api/building'))

// db.sync().then(() => {
//   console.log('db synced')
//   app.listen(PORT, () =>
//     console.log(`Listening on port ${PORT}`)
//   )
// })