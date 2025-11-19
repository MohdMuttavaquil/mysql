import express from 'express'
import cors from 'cors'
import "dotenv/config"

import userRoute from './Route/userRoute.js'
import admainRoute from './Route/admainRoute.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/user', userRoute)
app.use('/admain', admainRoute)

app.get('/', (req, res)=>{
    res.json("server is live")
})

app.listen(PORT, ()=>{
    console.log(`servser is running on port ${PORT}`)
})