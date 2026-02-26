// import 'dotenv/config'
// import express from 'express'
// import cors from 'cors'
// import routers from './routes.js'


// const app = express()

// app.use(cors({origin: '*'}))

// app.use(express.json());

// app.use('/', routers)

// app.listen(3002, () => {
//     console.log('connected to server')
// })

// // Keep your existing code, just add this:
// export default app;




import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routers from './routes.js'

const app = express()

app.use(cors({origin: '*'}))
app.use(express.json());

app.use('/api', routers)

// ONLY run app.listen if we are NOT on Vercel
// if (process.env.NODE_ENV !== 'production') {
// } 
    
    // app.listen(3002, () => {
    //     console.log('Server running locally on port 3002')
    // })


// Vercel needs this export to handle the request
export default app;


///////////////////









