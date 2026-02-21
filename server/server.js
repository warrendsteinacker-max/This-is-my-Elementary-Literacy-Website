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

console.log(x)

Object.values(x).forEach((key) => console.log(key))

const shalownewx = Object.assign({}, x) 

const secshalownewx = {...shalownewx}

shalownewx.aa = 'na'

console.log(x)

console.log(secshalownewx)

console.log(shalownewx)






