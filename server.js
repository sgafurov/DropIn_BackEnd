const express = require('express')
const app = express()

app.get('/', (req, res) => {
    //the request is trying to access '/' on localhost
    //the response is printing 'hello' on the webpage
    console.log('im on /')
    res.status().send('hello')
})

app.listen(3000)