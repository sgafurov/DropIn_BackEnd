const Sequelize = require('sequelize')
const express = require('express')
const app = express()
const db = require("./database/db")
const userModel = require("./database/models/user")
const addressModel = require("./database/models/address") 

app.get('/', (req, res) => {
    //the request is trying to access '/' on localhost
    //the response is printing 'hello' on the webpage
    console.log('im on /')
    res.status().send('hello')
})

const start = async() =>{
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        userModel.sync();
        addressModel.sync();
        users = await userModel.findAll();
        addresses = await addressModel.findAll();
        console.log(users);
        console.log(addresses);

      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
start();

app.listen(3000)