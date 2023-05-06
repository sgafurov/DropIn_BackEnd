//these are routes that have something to do with posts
import express from "express";

import {
  postReview,
  getReviews,
  getUserReviews,
} from "../MERNcontrollers/review.js";

const router = express.Router();

router.post("/postReview", postReview);
router.post("/getReviews", getReviews);
router.post("/getUserReviews", getUserReviews);

export default router;
