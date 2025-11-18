import express from "express";
import { checkVerify, verifyReq } from "../Controller/userController.js";

const userRoute = express.Router()

userRoute.post('/verify', verifyReq)
userRoute.post('/check', checkVerify)

export default userRoute