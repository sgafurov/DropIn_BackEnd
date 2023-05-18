//these are routes that have something to do with posts
import express from "express";

import { register, login, getUserInfo } from "../MERNcontrollers/user.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/userInfo", getUserInfo);

export default router;
