// controller has all the handlers/logic for our routes

import Review from "../MERNmodels/review.js";

export const postReview = async (req, res) => {
  console.log("inside postReview route", req.body);
  try {
    const newReview = await Review.create(req.body);
    res.status(200).json(newReview);
  } catch (error) {
    console.log(error);
    if (error.status == 400) {
      res.status(400).json(error);
    } else {
      res.status(500).json(error);
    }
  }
};

export const getReviews = async (req, res) => {
  console.log("inside getReviews route ", req.body);
  try {
    const reviews = await Review.find({ username: req.body.address });
    res.status(200).json(reviews);
  } catch (error) {
    if (res.statusCode == 400) {
      res.status(400).json(error); //error objects are composed of status codes and messages
    } else {
      res.status(500).json(error);
    }
  }
};
