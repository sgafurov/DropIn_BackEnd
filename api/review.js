const router = require('express').Router()
const Review = require('../db/models/review')

// Get all reviews in the db
router.get('/reviews', async (req, res) => {
    try {
        const reviews = await Review.findAll()
        res.status(200).send(reviews)
    } catch (error) {
        res.send(error.message)
    }
})

//Get user specific reviews
router.post('/reviews', async (req, res) => {
    try {
        const reviews = await Review.findAll({
            where: {
                username: req.body.username
            }
        })
        res.status(200).send(reviews)
    } catch (error) {
        res.send(error.message)
    }
})

// Create new review
router.post('/review', async (req, res) => {
    console.log('inside create new review route ', req.body)
    try {
        const isExistingReview = await Review.findByPk(req.body.review_id)

        const hasAlreadyReviewedThisBuilding = await Review.findAll({
            where: {
                building_id: req.body.building_id,
                username: req.body.username
            }
        })

        if (isExistingReview) {
            res.status(400)
            throw { status: 400, message: 'This review has been posted' }
        }
        if (hasAlreadyReviewedThisBuilding.length) {
            res.status(400)
            throw { status: 400, message: 'You have already reviewed this building' }
        }
        if (!req.body.review_id) {
            res.status(400)
            throw { status: 400, message: 'No review id provided' }
        }
        if (!req.body.username) {
            res.status(400)
            throw { status: 400, message: 'Please specify who is leaving the review' }
        }
        if (!req.body.comment_body) {
            res.status(400)
            throw { status: 400, message: 'No text provided in comment body' }
        }
        if (!req.body.star_rating) {
            res.status(400)
            throw { status: 400, message: 'No star rating provided' }
        }
        const reviewData = await Review.create(req.body)
        res.status(200).json(reviewData)
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