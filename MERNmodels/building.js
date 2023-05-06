import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const buildingSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
    unique: true
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

const Building = mongoose.model("Building", buildingSchema);

export default Building;
