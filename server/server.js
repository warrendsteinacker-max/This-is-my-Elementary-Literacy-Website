import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import {GooleGenAI} from '@google/genai'


app.use(express.json())

app.use(cors({origin: '*'}))

const genAI = GooleGenAI({
    apiKey: process.env.AI_KEY
});

app.listen(3002, () => {
    console.log('connected to server')
})






