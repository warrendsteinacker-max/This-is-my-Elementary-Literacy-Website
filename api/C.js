import AI from './AIconfig.js';


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

        const cleanedResponse = result.text.replace(/[^a-zA-Z0-9, "]/g, " ");

        res.status(200).json({ d: cleanedResponse });
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
        res.status(200).json({ data: cleanedResponse });

    } catch (error) {
        console.error("DEBUG ERROR:", error);
        res.status(500).json({ status: false, message: "Lost AI connection" });
    }
};


export const post3 = async (req, res) => {
    const { Q } = req.body;

    // Embedded context for Module 3 Lesson Plan and Strategies
    const module3Context = `
    MODULE 3: LITERACY LESSON PLAN AND INTERVENTION:
    - Focus: Phonemic awareness and systematic instruction.
    - Assessment: Diagnostic/pre-assessment using oral identification of beginning sounds in spoken words. Formative assessment involves observing segmenting ability during small group work.
    - Tiered Intervention: 
      1. Tier II Small Group: Pulling students who struggle with phoneme isolation for additional practice with oral sound games.
      2. 1-1 Instruction: Using tactile manipulatives (chips or blocks) to represent sounds physically for students struggling to segment.
      3. Re-teach Strategy: Utilizing Elkonin boxes (sound boxes) to visualize the number of sounds in words.
    - Differentiation: Modifying/backtracking to earlier stages of phonological awareness, providing immediate feedback, and using leveled materials.
    `;

    try {
        const result = await AI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are an expert literacy education assistant. 
            Use the following context from the Module 3 lesson plan assignment: 
            ${module3Context}
            
            Answer this question or request: 
            ${Q}
            
            Constraint: Respond using only plain text. Do not use any special symbols, brackets, or markdown characters. Only use commas and double quotes for punctuation.`
        });

        // Clean response of any remaining special characters
        const cleanedResponse = result.text.replace(/[^a-zA-Z0-9, "]/g, " ");
        res.status(200).json({ data: cleanedResponse });

    } catch (error) {
        console.error("DEBUG ERROR:", error);
        res.status(500).json({ status: false, message: "Lost AI connection" });
    }
};


export const post4 = async (req, res) => {
    const { Q } = req.body;

    // Embedded context for Module 4: Integrated Literacy Instruction
    const module4Context = `
    MODULE 4: INTEGRATED LITERACY LESSON PLAN AND REFLECTION:
    - Lesson Goal: Develop integrated literacy skills by connecting word recognition, vocabulary knowledge, and fluency to improve comprehension of community helper texts.
    - Pedagogical Approach: Balanced literacy instruction where word recognition builds automaticity for fluency, enabling comprehension when paired with strong vocabulary.
    - Assessment: 
      1. Pre-Assessment: Quick word recognition check using CVC cards and picture walks for vocabulary knowledge.
      2. Formative: Teacher observation using fluency checklists and think-pair-share monitoring.
      3. Summative: Completed story map incorporating vocabulary words (rubric scored) and exit tickets.
    - Differentiation and Enrichment: Flexible grouping based on pre-assessment, peer tutoring, and using vocabulary to write original sentences.
    - Theoretical Framework: Tompkins et al. (2021) confirm that automaticity in word recognition frees cognitive resources for meaning-making, a creative and multifaceted process.
    `;

    try {
        const result = await AI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are an expert literacy education assistant. 
            Use the following context from the Module 4 lesson plan and mind map reflection: 
            ${module4Context}
            
            Answer this question or request: 
            ${Q}
            
            Constraint: Respond using only plain text. Do not use any special symbols, brackets, or markdown characters. Only use commas and double quotes for punctuation.`
        });

        // Clean response of any remaining special characters
        const cleanedResponse = result.text.replace(/[^a-zA-Z0-9, "]/g, " ");
        res.status(200).json({ data: cleanedResponse });

    } catch (error) {
        console.error("DEBUG ERROR:", error);
        res.status(500).json({ status: false, message: "Lost AI connection" });
    }
};


export const post5 = async (req, res) => {
    const { Q } = req.body;

    // Embedded context from the provided Module 5 PDFs
    const module5Context = `
    MODULE 5: CHILDREN'S LITERATURE REVIEW AND LESSON PLAN:
    - Pedagogical Focus: Using children's literature as a teaching tool to scaffold reading.
    - Literature Review Context: Analysis of Starfall Learn to Read series (e.g., Zac the Rat, Car Race). 
    - Key Scaffolding Strategies: 
      1. Echo reading: Students repeat after the teacher using repetitive sentence patterns.
      2. Picture-supported prediction: Using illustrations to understand nouns and predict text.
      3. Phonics Focus: CVC words and r-controlled vowels (e.g., /ar/ sound).
    - Grade 1 Lesson Plan Context: 
      - Goal: Develop phonological awareness of /ar/, fluency via shared/echo reading, and comprehension through retelling/sequencing.
      - Assessment: Observation of echo/choral reading, sequencing picture cards from the story, and exit tickets using sentence frames.
      - Differentiation/Intervention: Re-teach strategy using different modalities, leveled materials, immediate feedback, and flexible grouping.
    - Cross-curricular connection: Integrating math elements (e.g., identifying character numbers like Carla is 5, Mark is 7) with literacy objectives.
    `;

    try {
        const result = await AI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are an expert literacy education assistant. 
            Use the following context from the Module 5 literature review and lesson plan assignment: 
            ${module5Context}
            
            Answer this question or request: 
            ${Q}
            
            Constraint: Respond using only plain text. Do not use any special symbols, brackets, or markdown characters. Only use commas and double quotes for punctuation.`
        });

        const cleanedResponse = result.text.replace(/[^a-zA-Z0-9, "]/g, " ");
        res.status(200).json({ data: cleanedResponse });

    } catch (error) {
        console.error("DEBUG ERROR:", error);
        res.status(500).json({ status: false, message: "Lost AI connection" });
    }
}; 


export const post6 = async (req, res) => {
    const { Q } = req.body;

    // Embedded context for Module 6: Narrative Writing Scaffolding
    const module6Context = `
    MODULE 6: NARRATIVE WRITING LESSON PLAN AND REFLECTION:
    - Focus: Teaching personal narratives with a clear beginning, middle, and end.
    - Scaffolding Strategies: 
      1. Story Grammar Charts: Breaks abstract structure into WHO, WHERE/WHEN, BEGINNING, MIDDLE, END.
      2. Mentor Texts: Using Owl Moon as a model for narrative structure and cognitive processes.
      3. Think-Aloud Demonstrations: Making invisible cognitive processes visible (translating mental stories to written plans).
      4. Anchor Charts: Visual cues for transition words.
      5. Sentence Frames: Reduces cognitive load for struggling writers while they organize ideas.
    - Pedagogical Purpose: Moving from oral retelling to encoded phonetic writing.
    - Differentiation: Small group reteaching, physical sequence cards, 1-on-1 conferencing, and kinesthetic storytelling.
    - Reflection: Part 6a table acted as an architectural blueprint, proactively building in supports for EL, dyslexia, and ADHD needs.
    `;

    try {
        const result = await AI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are an expert literacy education assistant. 
            Use the following context from the Module 6 lesson plan and reflective essay: 
            ${module6Context}
            
            Answer this question or request: 
            ${Q}
            
            Constraint: Respond using only plain text. Do not use any special symbols, brackets, or markdown characters. Only use commas and double quotes for punctuation.`
        });

        const cleanedResponse = result.text.replace(/[^a-zA-Z0-9, "]/g, " ");
        res.status(200).json({ data: cleanedResponse });

    } catch (error) {
        console.error("DEBUG ERROR:", error);
        res.status(500).json({ status: false, message: "Lost AI connection" });
    }
};


export const post7 = async (req, res) => {
    const { Q } = req.body;

    // Embedded context for Module 7: Literacy Assessment Plan
    const module7Context = `
    MODULE 7: STUDENT LITERACY ASSESSMENT PLAN CONTEXT:
    - Core Philosophy: Assessment should measure mastery of learning objectives without unfairly penalizing students for processing differences.
    - Assessment Categories: 
      1. Formative: Ongoing checks like oral blending checklists, running records, and teacher observation during small-group partner reading to document self-correction and decoding strategies.
      2. Summative: End-of-lesson demonstrations of mastery, such as independent word reading, picture-mapping comprehension, or rubric-scored story maps.
    - Ethical Modification Strategy: 
      - The central tension is modifying the "pathway" to the task (how the student accesses the assessment) rather than modifying the "task" itself (what is being measured).
      - Modifications: Reducing environmental distractions, using oral instead of written responses for students with fine motor challenges, providing visual sentence frames, and allowing extra processing time.
    - Validity: Ensure that modifications do not simplify the core objective; for example, if the goal is phonological processing and orthographic mapping, the assessment must still require the student to demonstrate those specific skills.
    `;

    try {
        const result = await AI.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `You are an expert literacy education assistant. 
            Use the following context from the Module 7 Assessment Plan: 
            ${module7Context}
            
            Answer this question or request: 
            ${Q}
            
            Constraint: Respond using only plain text. Do not use any special symbols, brackets, or markdown characters. Only use commas and double quotes for punctuation.`
        });

        // Clean response
        const cleanedResponse = result.text.replace(/[^a-zA-Z0-9, "]/g, " ");
        res.status(200).json({ data: cleanedResponse });

    } catch (error) {
        console.error("DEBUG ERROR:", error);
        res.status(500).json({ status: false, message: "Lost AI connection" });
    }
}; 

