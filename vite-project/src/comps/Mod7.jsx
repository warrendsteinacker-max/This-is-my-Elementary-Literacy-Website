import React from 'react';
import {Link} from "react-router-dom"

const Mod7 = () => {
  const pdfPath1 = `./Part 7_ Student Literacy Assessment Plan (1).pdf`; 


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
      <h2 className="mod-title">
        Module 7 Part 7 Assignment
      </h2>
      
      <div className="glass-box">
        <p>
          This assignment serves as a comprehensive Student Literacy Assessment Plan that synthesizes instructional strategies and assessment data across the curriculum for weeks two through six. It fulfills the project requirements by bridging the gap between instructional design and data driven equity. The plan documents a systematic approach that includes one formative and one summative literacy assessment for each lesson, ensuring clear alignment with specific learning objectives and learner needs. For every lesson, the plan explicitly documents modifications for five diverse learner profiles, including English learners, students with dyslexia, students with autism spectrum disorder, students with attention deficit hyperactivity disorder, and gifted learners.

          By documenting these tailored supports, such as visual scaffolds, sensory structures, and enrichment tasks, the plan demonstrates a sophisticated ability to engage in equitable instructional planning. A significant portion of the work is dedicated to an in depth analysis of one selected lesson, where the assessment context and purpose are described while developing detailed rubrics for both formative and summative tasks.

          These rubrics define criteria, performance levels, and descriptors to ensure that evaluation remains objective and transparent. Finally, the assessment plan concludes with a thoughtful reflection that evaluates growth in assessment design and differentiation, addressing how the challenge of modifying tasks while maintaining the integrity of the learning goals was navigated, and discussing how such planning improves future instructional decision making for all students in a diverse classroom.
          {/* (Your text continues here) */}
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Module 7 Part 7 Assignment 
      </p>

      {/* --- Section 1 --- */}
      <iframe 
        className="pdf-viewer"
        src={pdfPath1} 
        title="PDF 1"
      ></iframe>
      <div style={{ textAlign: 'center' }}>
        <a href={pdfPath1} download>
          <button className="download-btn">
            Download Part of Assigment
          </button>
        </a>
      </div>

      
    </div>
    </>
  );
};

export default Mod7;