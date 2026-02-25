import 'dotenv/config';
import { GoogleGenAI } from '@google/genai';

// Initialize the client
const ai = new GoogleGenAI({ apiKey: process.env.AI_KEY });

// In the NEW library, you don't 'get' a model object anymore.
// You call methods directly through 'ai.models'
export default ai;