import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {GooleGenAI} from '@google/genai'






app.use(express.json())

app.use(cors({origin: '*'}))

app.use('/api', routers)

app.listen(3002, () => {
    console.log('connected to server')
})






