// import fs from 'fs/promises'
// import path from 'path'
// import AI from './AIconfig.js'
// import { PDFDocument } from 'pdf-lib';

// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

// // 2. Use require to load pdf-parse (this avoids the 'exports' error)
// const pdf = require('pdf-parse')

// // export const post1 = async(req, res) => {
    
// //     const {Q} = req.body

// //     try{
// //         const tarpostp = path.join(process.cwd(), '..', 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
// //         console.log(tarpostp)
// //         const data1 = await fs.readFile(tarpostp)
// //         const dataB1 = await PDFDocument.load(data1)
// //         console.log(data1.text)
// //         const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB1.text
// //         const result = await AI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);
// //         const aiResponse = result.response.text();
// //         res.status(200).json({data: aiResponse})
// //     }
// //     catch(error){
// //         console.error(error.message)
// //         console.log('lost AI connect')
// //         res.status(500).json({status: false})
// //     }

// //     } 

// /////this works remember to send result not the other one
// export const post1 = async (req, res) => {
//     const { Q } = req.body;
//     try {
//         const tarpostp = path.join(process.cwd(), '..', 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf');
//         const fileBuffer = await fs.readFile(tarpostp);

//         const result = await AI.models.generateContent({
//             model: "gemini-2.5-flash", 
//             contents: [{
//                 role: "user",
//                 parts: [
//                     { inlineData: { data: fileBuffer.toString("base64"), mimeType: "application/pdf" } },
//                     { text: Q },
//                 ],
//             }],
//         });


//         console.log(result)
//         // 1. Get the clean text string
//         const aiResponse = result.candidates[0].content.parts[0].text;

//         // 2. Send it back EXACTLY how the frontend expects it
//         // Do NOT use String(result) or String(aiResponse)
//         res.status(200).json({ d: aiResponse });

//     } catch (error) {
//         console.error("DEBUG ERROR:", error.message);
//         res.status(500).json({ d: "The AI failed to read the PDF. " + error.message });
//     }
// };




import fs from 'fs/promises';
import path from 'path';
import AI from './AIconfig.js';



// export const post1 = async (req, res) => {
//     const { Q } = req.body;
    
//     try {
//         const pdfExtract = new PDFExtract();
//         const tarpostp = path.join(process.cwd(), '..', 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf');

//         // Extract text from PDF
//         const data = await pdfExtract.extract(tarpostp);
        
//         // Combine all extracted text into one string
//         let fullText = "";
//         data.pages.forEach(page => {
//             page.content.forEach(item => {
//                 fullText += item.str + " ";
//             });
//         });

//         // Send extracted text to AI
//         const model = AI.getGenerativeModel({ model: "gemini-1.5-flash" });
//         const prompt = `Based on this document: ${fullText}\n\nAnswer this question: ${Q}`;
        
//         const result = await model.generateContent(prompt);
//         const aiResponse = result.response.text();

//         res.status(200).json({ d: aiResponse });

//     } catch (error) {
//         console.error("DEBUG ERROR:", error.message);
//         res.status(500).json({ d: "The AI failed to process the PDF. " + error.message });
//     }
// };

const cleanResponse = (text) => {
    // Keeps only alphanumeric characters, commas, and double quotes
    return text.replace(/[^a-zA-Z0-9, "]/g, " ");
};

// --- Module 1 Controller ---
export const post1 = async (req, res) => {
    const { Q } = req.body;
    const assignmentContext = `LITERACY CHECKLIST AND STUDENT PROFILE: 
    Five Components: Phonemic Awareness, Phonics, Fluency, Vocabulary, Comprehension. 
    Student: Aaliyah, Grade 2, bilingual. 
    Strengths: Listening comprehension, oral retelling, collaborative learning. 
    Needs: English phonics, spelling, word recognition. 
    Strategies: Multisensory Sound Boxes, Explicit Phonics, Choral Reading, Graphic Organizers.`;

    try {
        const result = await AI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Answer the following question based on this context: ${assignmentContext}. 
            Question: ${Q}. 
            Constraint: Use only plain text, commas, and double quotes.`
        });

        res.status(200).json({ d: cleanResponse(result.text) });
    } catch (error) {
        res.status(500).json({ d: "The AI failed to process the request." });
    }
};

export const post2 = async (req, res) => {
    const { Q } = req.body;

    const module2Context = `
    MODULE 2: REFLECTION ESSAY AND LITERACY MAP CONTEXT:
    - Core Strategies: 
      1. Explicit Strategy Instruction: Teachers model predicting, questioning, clarifying, and summarizing. 
      2. Graphic Organizers: Use visual tools like story maps, Venn diagrams, and sequence charts to organize thinking[cite: 188, 191]. 
      3. Think-Aloud Demonstrations: Teachers verbalize their thinking process to make comprehension strategies visible[cite: 198, 199]. 
      4. Oral Retelling and Summarization: Allows students to show understanding without the barrier of written expression[cite: 203, 205]. 
      5. Text Connections: Teach students to make Text-to-Self, Text-to-Text, and Text-to-World connections to link new learning to prior knowledge[cite: 210, 211].
    - Metacognition: Students must monitor their reading, recognize when it does not make sense, and self-correct using phonological, semantic, syntactic, and pragmatic information[cite: 181].
    - Reflective Focus: Using assessments to capture the full picture of abilities, implementing peer learning like structured partner reading, and explicitly teaching comparison of writing systems[cite: 296, 300, 290].
    `;

    try {
        const result = await AI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are an expert literacy education assistant. 
            Use the following context from the Module 2 reflection and mapping assignment: 
            ${module2Context}
            
            Answer this question or request: 
            ${Q}
            
            Constraint: Respond using only plain text. Do not use any special symbols, brackets, or markdown characters. Only use commas and double quotes for punctuation.`
        });

        // Clean response to ensure only allowed characters remain
        const cleanedResponse = result.text.replace(/[^a-zA-Z0-9, "]/g, " ");
        res.status(200).json({ data: cleanedResponse });

    } catch (error) {
        console.error("DEBUG ERROR:", error);
        res.status(500).json({ status: false, message: "Lost AI connection" });
    }
};


export const post3 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const tarpostp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format mod 3 (3).pdf')
        const data3 = await fs.readFile(tarpostp)
        const dataB3 = await pdf(data3)
        console.log(data3.text)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB3.text
        const result = await AI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const post4 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const tarpostp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format mod 4 (4).pdf')
        const data4 = await fs.readFile(tarpostp)
        const dataB4 = await pdf(data4)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB4.text
        const result = await AI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const post5 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const tarpostp = path.join(process.cwd(), 'vite-project', 'public', 'part a mod 5 and one page reflection (1).pdf')
        const data5 = await fs.readFile(tarpostp)
        const dataB5 = await pdf(data5)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB5.text
        const result = await AI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const post6 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const tarpostp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format (6) (1).pdf')
        const data6 = await fs.readFile(tarpostp)
        const dataB6 = await pdf(data6)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB6.text
        const result = await AI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const post7 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const tarpostp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
        const data1 = await fs.readFile(tarpostp)
        const dataB1 = await pdf(data1)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB1.text
        const result = await AI.generateContent(prompt)
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const post8 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const tarpostp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
        const data1 = await fs.readFile(tarpostp)
        const dataB1 = await pdf(data1)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB1.text
        const result = await AI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 



export const post9 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const tarpostp = path.join(process.cwd(), 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
        const data1 = await fs.readFile(tarpostp)
        const dataB1 = await pdf(data1)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB1.text
        const result = await AI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);
        const aiResponse = result.response.text();
        res.status(200).json({data: aiResponse})
    }
    catch(error){
        console.error(error.message)
        console.log('lost AI connect')
        res.status(500).json({status: false})
    }

    } 
