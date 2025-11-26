import express from 'express'
import { adamin, getList, unverifyStudants, verifyUser } from '../Controller/admainController.js'

const admainRoute = express.Router()

admainRoute.post('/login', adamin)
admainRoute.post('/getlist', getList)
admainRoute.post('/verify', verifyUser)
admainRoute.post('/unverify', unverifyStudants)

export default admainRoute