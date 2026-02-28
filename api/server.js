import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routers from './routes.js'
import connectDB from './db.js'


connectDB()

const app = express()

app.use(cors({origin: '*'}))
app.use(express.json());

app.use('/api', routers)

export default app;


