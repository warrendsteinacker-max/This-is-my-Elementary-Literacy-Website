import express from 'express'
import { post1, post2, post3, post4, post5, post6, post7, post8, post9 } from './C.js'
import fs from 'fs/promises';
import path from 'path';
import AI from './AIconfig.js';
import pkg from 'pdf.js-extract';
const { PDFExtract } = pkg;

const router = express.Router()


// router.post('/1', (req, res) => {
//     const {Q} = req.body
//     try{

//         if(Q === 'h'){
//             return res.status(401).json({message: 'not created'})
//         }

//         return res.status(201).json({message: 'created'})
//     }
//     catch(error){
//         return res.status(500).json({message: 'error'})
//     }
// })

///
//////

// router.post('/1', post1)

router.post('/1', async (req, res) => {
    const { Q } = req.body;
    
    try {
        const pdfExtract = new PDFExtract();
        
        // Correct path: Point directly to the location identified in your test route
        const tarpostp = path.join(process.cwd(), 'api', 'data', 'Teacher Prep Lesson Plan Format.pdf');

        // Verify file existence for better debugging
 // Or import fs from 'fs' at the top
        if (!fs.existsSync(tarpostp)) {
            throw new Error(`File not found at: ${tarpostp}`);
        }

        // Extract text from PDF
        const data = await pdfExtract.extract(tarpostp);
        
        // ... (rest of your logic remains the same)
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
        res.status(500).json({ d: "The AI failed to process the PDF. " + error.message, data: data, FT: fullText, tarpostp: tarpostp });
    }
})

router.post('/2', post2)
router.post('/3', post3)
router.post('/4', post4)
router.post('/5', post5)
router.post('/6', post6)
router.post('/7', post7)
router.post('/8', post8)
router.post('/9', post9)


export default router