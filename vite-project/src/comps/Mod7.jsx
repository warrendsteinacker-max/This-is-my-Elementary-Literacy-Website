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
          This assignment focuses on the creation of a professional Literacy Instructional Guide website...
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

      {/* --- Section 2 --- */}
      <iframe 
        className="pdf-viewer"
        src={pdfPath2} 
        title="PDF 2"
      ></iframe>
      <div style={{ textAlign: 'center' }}>
        <a href={pdfPath2} download>
          <button className="download-btn">
            Download Part of Assigment 
          </button>
        </a>
      </div>
    </div>
  );
};

export default Mod7;