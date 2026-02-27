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
app.use('/', routers)

// app.get('/', (req, res) => {
//   res.send('Server is live!');
// });

// app.post('/api/:id', (req, res) => {

//   return res.json({id: req.params.id})
// })

app.post('/api', async (req, res) => {
    // Fix: 3. Ensure 'Q' exists
    const { Q } = req.body;
    if (!Q) {
        return res.status(400).json({ d: "Question (Q) is required." });
    }
    
    try {
        // Updated path: pointing to an 'assets' folder inside your backend project
        const tarpostp = path.join(__dirname, 'api', 'assets', 'Teacher Prep Lesson Plan Format.pdf');

        const pdfExtract = new PDFExtract();
        const data = await pdfExtract.extract(tarpostp);
        
        let fullText = "";
        data.pages.forEach(page => {
            page.content.forEach(item => {
                fullText += item.str + " ";
            });
        });

        const model = AI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const prompt = `Based on this document: ${fullText}\n\nAnswer this question: ${Q}`;
        
        const result = await model.generateContent(prompt);
        const aiResponse = result.response.text();

        res.status(200).json({ d: aiResponse });

    } catch (error) {
        console.error("DEBUG ERROR:", error.message);
        res.status(500).json({ d: "The AI failed to process the PDF. " + error.message });
    }
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





