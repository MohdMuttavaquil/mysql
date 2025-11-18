import express from 'express'
import cors from 'cors'
import "dotenv/config"

import userRoute from './Route/userRoute.js'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(cors())

app.use('/user', userRoute)

app.get('/', (req, res)=>{
    res.json("server is live")
})

app.listen(PORT, ()=>{
    console.log(`servser is running on port ${PORT}`)
})