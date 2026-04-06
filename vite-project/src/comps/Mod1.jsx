// import React from 'react';

// export default function Mod1() {
//   // Use the repo name for the base path for GitHub Pages
//   // Since the file is in 'public', use the absolute path including the repo name
// //   const repoName = "assignment-";
// //   const pdfPath = `/${repoName}/project-1-2-1.pdf`; 
// const pdfPath = "./project-1-2-1.pdf";

//   return (
//     <div className="preview-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
//       <h3 style={{ fontFamily: 'sans-serif', color: 'black' }}>
//         Module 1 Part 1 Assignment
//       </h3>
//       <div style={{border: '2px solid black', borderRadius: '10px', padding: '10px', marginBottom: '15px'}}>
//         <p style={{ color: 'black', margin: 0 }}>This assignment focuses on the creation of a professional Literacy Instructional Guide website that bridges research-based theory with practical classroom application for Grades K–3. In Part 1a, there is a comprehensive instructional checklist featuring 3–5 strategies for each of the five core literacy components—phonemic awareness, phonics, fluency, vocabulary, and comprehension—ensuring each is grade-appropriate and properly cited. Part 1b applies that checklist to a specific student profiles (such as Sofia, Malik, Aaliyah, or Jackson) to analyze their unique linguistic, cultural, and cognitive needs, culminating in a reflective essay that identifies strategy gaps and revisions. The final product is a visually organized, teacher-friendly piece of work in this website designed to demonstrate my ability to provide targeted, inclusive literacy support during a professional teaching interview and in class.</p>
//       </div>
//       <p style={{ fontSize: '14px', color: 'black', marginBottom: '15px' }}>
//         Preview of Module 1 Part 1 Assignment 
//       </p>
      
//       {/* PDF preview iframe */}
//       <iframe 
//         style={{
//           borderRadius: '15px', 
//           width: '100%', 
//           height: '600px', 
//           border: '2px solid #eaeaea',
//           boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
//         }}
//         src={pdfPath}  
//         title="1"
//       ></iframe>

//       {/* Download Section */}
//       <div style={{ marginTop: '20px', textAlign: 'center' }}>
//         <a href={pdfPath} download="project-1-2-1.pdf">
//           <button style={{
//             backgroundColor: '#4A90E2',
//             color: 'white',
//             padding: '12px 24px',
//             borderRadius: '8px',
//             border: 'none',
//             cursor: 'pointer',
//             fontSize: '16px',
//             fontWeight: 'bold'
//           }}>
//             Download Assignment
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import {Link} from "react-router-dom"


export default function Mod1() {
  const pdfPath = "./project-1-2-1.pdf";

  return (
    
    <>
                <div style={{backgroundColor: 'black', padding: '30px'}}> 
                <p style={{fontWeight: 'bold' , color: 'whitesmoke'}}>
                Navigation
                </p>
                </div>
                <nav style={{
                  borderRadius: '10px', 
                  position: 'sticky', 
                  top: 0,  
                  zIndex: 1000,
                  display: 'flex', 
                  gap: '20px', 
                  justifyContent: 'center', 
                  background: 'linear-gradient(to right, orange, pink)', 
                  padding: '10px', 
                  alignItems: 'center',
                  marginTop: '5px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    {/* Using the imported logo variable ensures the image shows up */}
                    {/* <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> */}
                    <p style={{ margin: 0, fontSize: '14px', color: 'black' }}>
                      Welcome to my Elementary Literacy Section!
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
                  <Link to="/postP" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Post Page</Link>
                  {/* <Link to="/demo2" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module demo 2</Link>
                  <Link to="/MEAI" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module demo 2</Link>         */}
                </nav>
                 
    <div className="mod-container">
      <h2 className="mod-title">Module 1 Part 1 Assignment</h2>
      
      <div className="glass-box">
        <p>
          This assignment focuses on the creation of a professional Literacy Instructional Guide website centered on the five essential components of reading instruction for students in grades K through 3. The first portion of the project establishes a research based checklist of instructional strategies for phonemic awareness, phonics, fluency, vocabulary, and comprehension. These strategies include activities such as sound isolation, explicit phonics modeling, repeated reading, and the use of graphic organizers to support diverse learners. The second portion of the assignment requires a detailed analysis of a specific student profile named Aaliyah, who is a second grade bilingual learner transitioning from an Arabic literacy background. While she demonstrates strong listening comprehension and oral storytelling skills, she exhibits significant gaps in English phonics and word recognition. The project concludes with a reflective essay that evaluates how specific checklist strategies like multisensory sound boxes and choral reading support her needs, while also identifying the necessity for more culturally responsive practices such as explicit comparisons between right to left and left to right writing systems.
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Module 1 Part 1 Assignment 
      </p>
      
      <iframe 
        className="pdf-viewer"
        src={pdfPath}  
        title="Assignment Preview"
      ></iframe>

      <div style={{ textAlign: 'center' }}>
        <a href={pdfPath} download="project-1-2-1.pdf">
          <button className="download-btn">
            Download Assignment
          </button>
        </a>
      </div>
    </div>
    </>
  );
}