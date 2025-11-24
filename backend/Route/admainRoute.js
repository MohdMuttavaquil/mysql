import express from 'express'
import { adamin, getList, verifyUser } from '../Controller/admainController.js'

const admainRoute = express.Router()

admainRoute.post('/login', adamin)
admainRoute.post('/getlist', getList)
admainRoute.post('/verify', verifyUser)

export default admainRoute