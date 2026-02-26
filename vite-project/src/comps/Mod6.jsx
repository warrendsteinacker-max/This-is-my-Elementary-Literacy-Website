// import React from 'react'

// const Mod6 = () => {

//     const pdfPath1 = `./Teacher Prep Lesson Plan Format (6) (1).pdf`; 
//     const pdfPath2 = `./Mod 6 assig essay (1).pdf`;
    

    

//     return (<div className="preview-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
//       <h3 style={{ fontFamily: 'sans-serif', color: 'black' }}>
//         Module 6 Part 6 Assignment
//       </h3>
      
//       <div style={{ border: '2px solid black', borderRadius: '10px', padding: '10px', marginBottom: '16px' }}>
//         <p style={{ color: 'black', margin: 0 }}>
//           This assignment focuses on the creation of a professional Literacy Instructional Guide website...
//           {/* (Your text continues here) */}
//         </p>
//       </div>

//       <p style={{ fontSize: '16px', color: 'black', marginBottom: '16px' }}>
//         Preview of Module 6 Part 6 Assignment 
//       </p>

//       {/* --- Section 1 --- */}
//       <iframe 
//         style={{ borderRadius: '16px', width: '100%', height: '600px', border: '2px solid #eaeaea', marginBottom: '10px' }}
//         src={pdfPath1} title="PDF 1"
//       ></iframe>
//       <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//         <a href={pdfPath1} download>
//           <button style={{ backgroundColor: '#6A90E2', color: 'white', padding: '12px 26px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
//              Download Part of Assigment
//           </button>
//         </a>
//       </div>

//       {/* --- Section 2 --- */}
//       <iframe 
//         style={{ borderRadius: '16px', width: '100%', height: '600px', border: '2px solid #eaeaea', marginBottom: '10px' }}
//         src={pdfPath2} title="PDF 2"
//       ></iframe>
//       <div style={{ textAlign: 'center', marginBottom: '60px' }}>
//         <a href={pdfPath2} download>
//           <button style={{ backgroundColor: '#6A90E2', color: 'white', padding: '12px 26px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
//             Download Part of Assigment 
//           </button>
//         </a>
//       </div>



//     </div>
//   )

// }

// export default (Mod6)



import React from 'react';

const Mod6 = () => {
  const pdfPath1 = `./Teacher Prep Lesson Plan Format (6) (1).pdf`; 
  const pdfPath2 = `./Mod 6 assig essay (1).pdf`;

  return (
    <div className="mod-container">
      <h2 className="mod-title">
        Module 6 Part 6 Assignment
      </h2>
      
      <div className="glass-box">
        <p>
          This assignment consists of a comprehensive lesson plan designed for first grade students, focusing on the development of writing skills through the creation of personal narratives. The lesson guides students in structuring their stories with a clear beginning, middle, and end by utilizing mentor texts, story grammar charts, and planning webs to organize their ideas. To support the writing process, students use transition word anchor charts and sentence frames to ensure appropriate sequencing and flow within their narratives. Assessment is integrated throughout the lesson, starting with a diagnostic picture walk and moving to formative checks through think-pair-share and teacher conferencing. The project emphasizes differentiated support by offering kinesthetic storytelling and sequence cards for students needing additional intervention, while providing enrichment options like independent multi-page book projects and choice boards for advanced learners.
          {/* (Your text continues here) */}
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Module 6 Part 6 Assignment 
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

export default Mod6;
