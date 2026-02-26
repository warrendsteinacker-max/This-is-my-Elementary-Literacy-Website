import React from 'react';

const Mod7 = () => {
  const pdfPath1 = `./Part 7_ Student Literacy Assessment Plan (1).pdf`; 


  return (
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
  );
};

export default Mod7;