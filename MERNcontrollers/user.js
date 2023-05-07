// controller has all the handlers/logic for our routes

import User from "../MERNmodels/user.js";

export const register = async (req, res) => {
  console.log("inside register route", req.body);
  try {
    const user = await User.findOne({ username: req.body.username }); //find the user where the username in the DB is req.body.username
    if (user) {
      throw { status: 400, message: "An account with this username already exists." };
    }
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    if (error.status == 400) {
      res.status(400).json(error);
    } else {
      res.status(500).json(error);
    }
  }
};

export const login = async (req, res) => {
  console.log("inside login route ", req.body);
  try {
    const userInfo = await User.findOne({ username: req.body.username });
    if (!userInfo) {
      res.status(400);
      throw { status: 400, message: "This user does not exist." };
    }
    if (userInfo.password != req.body.password) {
      res.status(400);
      throw { status: 400, message: "The password does not match." };
    }
    res.status(200).json(userInfo);
  } catch (error) {
    if (res.statusCode == 400) {
      res.status(400).json(error); 
      // res.status(400).send(error.message);
    } else {
      res.status(500).json(error);
    }
  }
};
