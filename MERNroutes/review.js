//these are routes that have something to do with posts
import express from 'express'

import {postReview, getReviews} from "../MERNcontrollers/review.js"

const router = express.Router()

router.post('/postReview', postReview)
router.get('/getReviews', getReviews)

export default router