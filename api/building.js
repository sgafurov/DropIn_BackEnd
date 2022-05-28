const router = require('express').Router()
const Building = require('../db/models/building')

//Get all buildings 
router.get('/all-buildings', async (req, res) => {
    try {
        const buildings = await Building.findAll()
        res.status(200).send(buildings)
    } catch (error) {
        res.send(error.message)
    }
})

//Get specific building
router.get('/building', async (req, res) => {
    try {
        const building = await Building.findAll({
            where: {
                building_id: req.body.building_id
            }
        })
        console.log(typeof(building))
        if (building.length == 0) {
            res.status(400)
            throw { status: 400, message: 'Building does not exist' }
        }
        res.status(200).send(building)
    } catch (error) {
        res.send(error.message)
    }
})

//Add building to database
router.post('/building', async (req, res) => {
    console.log('inside create new building route ', req.body)
    try {
        if (!req.body.building_id) {
            res.status(400)
            throw { status: 400, message: 'No building id provided' }
        }
        if (!req.body.address) {
            res.status(400)
            throw { status: 400, message: 'Please provide address' }
        }
        const buildingData = await Building.create(req.body)
        res.status(200).json(buildingData)
    } catch (error) {
        if (res.statusCode == 400) {
            res.status(400).json(error) //error objects are composed of status codes and messages
        }
        else {
            res.status(500).json(error)
        }
    }
})

//DELETE specific buildings
router.delete('/building', async (req, res) => {
    console.log("inside delete building route", req.body)
    try {
        Building.destroy({
            where: {
                building_id: req.body.building_id
            }
        })
        res.status(200).json("Building has been deleted")
    } catch (error) {
        if (res.statusCode == 400) {
            res.status(400).json(error) //error objects are composed of status codes and messages
        }
        else {
            res.status(500).json(error)
        }
    }
})

module.exports = router