import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routers from './routes.js'


const app = express()

app.use(cors({origin: '*'}))

app.use(express.json());

app.use('/', routers)

app.listen(3002, () => {
    console.log('connected to server')
})


const x = {aa: 'a', bb: 'b'}

Object.values(x).forEach((key) => console.log(key))





