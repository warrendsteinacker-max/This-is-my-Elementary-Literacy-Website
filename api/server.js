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




// import 'dotenv/config'
// import express from 'express'
// import cors from 'cors'
// import routers from './routes.js'

// const app = express()

// app.use(cors({origin: '*'}))
// app.use(express.json());

// app.use('/api', routers)

// app.get('/', (req, res) => {
//   res.send('Server is live!');
// });

// // ONLY run app.listen if we are NOT on Vercel
// // if (process.env.NODE_ENV !== 'production') {
// // } 
    
//     // app.listen(3002, () => {
//     //     console.log('Server running locally on port 3002')
//     // })


// // Vercel needs this export to handle the request
// export default app;


/////////////////////////////////////



import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import routers from './routes.js'

const app = express()

// Set the origin to your specific GitHub Pages URL
const corsOptions = {
  origin: 'https://warrendsteinacker-max.github.io/This-is-my-Elementary-Literacy-Website',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use('/api', routers)

app.get('/', (req, res) => {
  res.send('Server is live!');
});

// Local development server listener
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3002;
    app.listen(PORT, () => {
        console.log(`Server running locally on port ${PORT}`)
    })
}

// Vercel export
export default app;





