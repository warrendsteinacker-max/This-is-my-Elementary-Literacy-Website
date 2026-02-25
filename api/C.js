import fs from 'fs/promises'
import path from 'path'
import AI from './AIconfig.js'
import { PDFDocument } from 'pdf-lib';

import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// 2. Use require to load pdf-parse (this avoids the 'exports' error)
const pdf = require('pdf-parse')

// export const post1 = async(req, res) => {
    
//     const {Q} = req.body

//     try{
//         const tarpostp = path.join(process.cwd(), '..', 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf')
//         console.log(tarpostp)
//         const data1 = await fs.readFile(tarpostp)
//         const dataB1 = await PDFDocument.load(data1)
//         console.log(data1.text)
//         const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB1.text
//         const result = await AI.getGenerativeModel({ model: "gemini-1.5-flash" }).generateContent(prompt);
//         const aiResponse = result.response.text();
//         res.status(200).json({data: aiResponse})
//     }
//     catch(error){
//         console.error(error.message)
//         console.log('lost AI connect')
//         res.status(500).json({status: false})
//     }

//     } 

/////this works remember to send result not the other one
export const post1 = async (req, res) => {
    const { Q } = req.body;
    try {
        const tarpostp = path.join(process.cwd(), '..', 'vite-project', 'public', 'Teacher Prep Lesson Plan Format.pdf');
        const fileBuffer = await fs.readFile(tarpostp);

        const result = await AI.models.generateContent({
            model: "gemini-2.5-flash", 
            contents: [{
                role: "user",
                parts: [
                    { inlineData: { data: fileBuffer.toString("base64"), mimeType: "application/pdf" } },
                    { text: Q },
                ],
            }],
        });


        console.log(result)
        // 1. Get the clean text string
        const aiResponse = result.candidates[0].content.parts[0].text;

        // 2. Send it back EXACTLY how the frontend expects it
        // Do NOT use String(result) or String(aiResponse)
        res.status(200).json({ d: aiResponse });

    } catch (error) {
        console.error("DEBUG ERROR:", error.message);
        res.status(500).json({ d: "The AI failed to read the PDF. " + error.message });
    }
};


export const post2 = async(req, res) => {
    
    const {Q} = req.body

    try{
        const tarpostp = path.join(process.cwd(), 'second-part-2b-reflection-essay-and-link-to-map-1-1.pdf')
        const data2 = await fs.readFile(tarpostp)
        const dataB2 = await pdf(data2)
        const prompt = Q + ' ' + 'this is data to answer Q' + ' ' + dataB2.text
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
