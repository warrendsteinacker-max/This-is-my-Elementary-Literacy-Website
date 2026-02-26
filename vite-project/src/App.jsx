
// import { HashRouter as Router, Routes, Route } from 'react-router-dom'
//will use this fir creating actual website

import React from 'react';
import './App.css';
// import Demo from './comps/Demo';
import {Demo2} from './comps/Demo2';
import Mod1 from './comps/Mod1';
import Mod2 from './comps/Mod2';
import Mod3 from './comps/Mod3';
import Mod4 from './comps/Mod4';
import Mod5 from './comps/Mod5';
import Mod6 from './comps/Mod6';
import Mod7 from './comps/Mod7';
import Home from './comps/Home';
import MeAI from './comps/MeAI';
// Import your logo at the top so Vite handles the path correctly

import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <div style={{backgroundColor: 'black', borderRadius: '10px'}}> 
        <p style={{fontWeight: 'bold' , color: 'whitesmoke'}}>
        Navigation
        </p>
        </div>
        <nav style={{
          borderRadius: '10px', 
          position: 'sticky', 
          top: 0,  
          display: 'flex', 
          gap: '20px', 
          justifyContent: 'center', 
          background: 'linear-gradient(to right, orange, pink)', 
          padding: '10px', 
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {/* Using the imported logo variable ensures the image shows up */}
            {/* <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> */}
            <p style={{ margin: 0, fontSize: '14px', color: 'black' }}>
              Welcome to my Elementary Literacy Skills Website!
            </p>
          </div>
          
          <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Home</Link>
          <Link to="/mod1" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 1</Link>
          <Link to="/mod2" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 2</Link>
          <Link to="/mod3" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 3</Link>
          <Link to="/mod4" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 4</Link>
          <Link to="/mod5" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 5</Link> 
          <Link to="/mod6" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 6</Link>
          <Link to="/mod7" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 7</Link>
          {/* <Link to="/demo2" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module demo 2</Link>
          <Link to="/MEAI" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module demo 2</Link>         */}
        </nav>

        <div style={{ padding: '20px' }}>
          <Routes>
            {/* 'index' ensures Home shows up as soon as the site loads */}
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/mod1" element={<Mod1 />} />
            <Route path="/mod2" element={<Mod2 />} />
            <Route path="/mod3" element={<Mod3 />} />
            <Route path="/mod4" element={<Mod4 />} />
            <Route path="/mod5" element={<Mod5 />}/>
            <Route path="/mod6" element={<Mod6 />}/>
            <Route path="/mod7" element={<Mod7 />}/>
            {/* <Route path="/demo" element={<Demo />}/> */}
            {/* <Route path="/demo2" element={<Demo2/>}/>
            <Route path="/MEAI" element={<MeAI/>}/> */}
            
            
            {/* 'path="*"' is your safety net; it catches broken links and redirects to Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

//////////////////////////
///////basename='/assignment-'
  // return (
  //   <>
  //     <div style={{
  //       display: 'flex', 
  //       flexDirection: 'column', 
  //       alignItems: 'center', 
  //       padding: '20px',
  //       boxSizing: 'border-box',
  //       width: '100%' // Ensures the container takes full screen width
  //     }}>
  //       {/* 1. The Brochure Image */}
  //       <img src='Gemini_Generated_Image_1.png' style={{borderRadius: '10px', width: '500px', height: 'auto', marginBottom: '30px'}}/>

  //       {/* 2. MAIN TITLE - Changed to h1 for better accessibility */}
  //       <h1 style={{fontSize: '4rem', textAlign: 'center', margin: '20px 0', width: '100%'}}>
  //         Oral Language: The Foundation for Early Spelling and Writing
  //       </h1>

  //       {/* 3. SUB-HEADING 1 */}
  //       <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
  //         Introduction: Why Talking Builds Writers
  //       </h2>

  //       {/* 4. PARAGRAPHS - Kept inside their own width-controlled div */}
  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>Oral language is the bedrock upon which all literacy skills are built. Before children can spell or write, they must first develop a strong foundation in spoken language. Research consistently demonstrates that phonological “awareness is an umbrella term that refers to an awareness of the different units of sounds in oral language" (Tompkins et al., 2021, p. 108). When children engage in rich oral language experiences, they develop the phonological awareness, vocabulary, and narrative skills essential for spelling and composing written texts.</p>
  //         <p style={{color: 'black', fontSize: '1.2rem'}}>The connection between speaking and writing is direct and powerful. As children learn the alphabetic principle, "they realize that the sounds (phonemes) they hear in oral language can be represented by letters (graphemes) in print" (Tompkins et al., 2021, p. 107). This understanding transforms speech into print. Furthermore, when children narrate their experiences orally, they practice organizing ideas in logical sequences—a skill that directly transfers to written composition. Every conversation, story, and word game strengthens the neural pathways that support literacy development.</p>
  //       </div>

  //       {/* 5. REMAINING HEADINGS - Stacking below the paragraphs */}
  //       <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
  //         Home Language as a Strength
  //       </h2>

  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>1. Telling Family Stories </p>
  //         <p style={{color: 'black', fontSize: '1.2rem'}}>
  //         Encourage your child to share stories from your family's history, traditions, or daily experiences in your home language. This practice builds narrative structure—the ability to sequence events with a beginning, middle, and end. During "the last 40 minutes of the reading period, Mrs. Firpo conducts guided reading lessons" (Tompkins et al., 2021, p. 106). Similarly, families can conduct guided storytelling during meals or bedtime, helping children organize their thoughts before transferring them to paper.</p>
  //       </div>

  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>2. Brainstorming Ideas in Home Language </p>
  //         <p style={{color: 'black', fontSize: '1.2rem'}}>
  //         Before your child writes, allow them to talk through their ideas in whichever language feels most comfortable. Mrs. Firpo's students take turns using their letter-sound knowledge to sound out these words: my, fish, can, at, and me.  Mrs. Firpo “guides the students to say each word slowly and listen to the sound” (Tompkins et al., 2021, p. 106). Just as Mrs. Firpo's students use what they know to build new learning, children who discuss concepts in their home language develop clearer, more sophisticated ideas that they can then express in writing in any language.</p>
  //       </div>

  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>3. Using Bilingual Labels </p>
  //         <p style={{color: 'black', fontSize: '1.2rem'}}>Create labels for objects around your home in both your home language and English. This practice demonstrates that "letters represent sounds" (Tompkins et al., 2021, p. 107). This can be applied across all languages and helps children see the connections between oral and written words. Place labels on doors, furniture, food items, and toys, and read them together regularly, pointing out how sounds in words are represented by letters.</p>
  //       </div>



  //       <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
  //         Simple, No-Cost Activities for Home
  //       </h2>

  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>Activity 1: Narrate Daily Routines</p>
  //         <p style={{color: 'black', fontSize: '1.2rem'}}>Talk through everyday tasks as you do them together. While cooking, say: "First, we're cracking two eggs. Listen to that /k/ sound at the beginning of crack!" During dressing, comment: "We're pulling on your red socks—red and socks both have short vowel sounds." This running commentary builds vocabulary and draws attention to the sounds in words. As suggested by Tompkins et al. (2021) on page 109,  developing phonological awareness, particularly an awareness of phonemes, is considered an essential and foundational to developing an understanding that letters represent sounds in language and, vice versa, that sounds are represented by letters.</p>
  //       </div>

  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>Activity 2: Play Oral Sound Games That can be Played in a Array of languages From The Book I Gave out</p>
  //         <p style={{color: 'black', fontSize: '1.2rem'}}>Engage in "I Spy" using the beginning sounds: "I spy something starting with /m/." Clap out syllables in family members' names. Play rhyming games: "What rhymes with cat?" These activities develop phonemic awareness—the ability to hear and manipulate individual sounds in words. "The largest units of sound within words are syllables" (Tompkins et al., 2021, p. 108).  If students can blend phonemes, then they can recognize the phonics portion of the lesson. Breaking words into syllables helps children understand word structure, which directly supports spelling development.</p>
  //       </div>

  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>Activity 3: Sing and Rhyme Together</p>
  //         <p style={{color: 'black', fontSize: '1.2rem'}}>Sing songs, nursery rhymes, or cultural chants from your family's heritage. Students “who can be heard playing with rhyming words, even sometimes making up words so they rhyme, have developed a sensitivity to rhymes, a medium size unit of sound that occurs in spoken language" (Tompkins et al., 2021, p. 108). The rhythm and repetition in songs help children notice patterns in language, which is a critical skill for both spelling and reading.</p>
  //       </div>

  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>Activity 4: Tell and Retell Stories</p>
  //         <p style={{color: 'black', fontSize: '1.2rem'}}>Ask your child to retell a favorite book, movie, or event from their day. Prompt them with questions: "What happened first? Then what? How did it end?" This practice builds narrative structure and vocabulary. To further support this activity's effectiveness, before children can spell words, they must first be able to talk about their experiences with those words in meaningful contexts. Story retelling provides this essential bridge between oral language and written composition.</p>
  //       </div>

  //       <h2 style={{fontSize: '2.5rem', border: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '20px 0'}}>
  //         The Research-Practice Connection
  //       </h2>

  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>The activities and strategies in this flyer are grounded in literacy research, as suggested by Tomkins et al. (2021). The alphabetic principle, understanding that letters represent sounds, cannot be mastered without strong phonological awareness. Similarly, writing development depends on a child's ability to segment words into syllables and sounds through their oral language experiences.</p>
  //         <p style={{color: 'black', fontSize: '1.2rem'}}>When families engage in these talk-rich activities, they create what researchers call a literacy-rich environment without spending a penny. Every conversation, every song, and every story builds the oral language foundation that transforms into spelling knowledge and writing ability.</p>
  //       </div>

  //       <h2 style={{fontSize: '2.5rem', borderBottom: '10px solid black', width: '90%', textAlign: 'center', padding: '10px', margin: '40px 0'}}>
  //         References
  //       </h2>

  //       <div style={{width: '80%', marginBottom: '40px'}}>
  //         <p style={{color: 'black', fontSize: '1.2rem', marginBottom: '15px'}}>Tompkins, G. E., Campbell, R., Green, D., & Smith, C. (2021). Literacy for the 21st century: A balanced approach (3rd Canadian ed.). Pearson</p>
  //       </div>
  //     </div>
  //   </>
  // )