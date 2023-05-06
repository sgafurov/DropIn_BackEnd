import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const reviewSchema = mongoose.Schema({
  username: { // should be tied to the username of person logged in
    type: String,
    required: true,
    ref: 'User'
  },
  address: {
    type: String,
    required: true,
    ref: 'Building'
  },
  review_body: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Review = mongoose.model("Review", reviewSchema);

export default Review;
