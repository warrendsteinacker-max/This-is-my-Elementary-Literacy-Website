

// const Mod4 = () => {

//     const pdfPath1 = `./Teacher Prep Lesson Plan Format mod 4 (4).pdf`; 
//     const pdfPath2 = `./Essay and link to Mind Map (1).pdf`;
    

    

//     return (<div className="preview-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
//       <h3 style={{ fontFamily: 'sans-serif', color: 'black' }}>
//         Module 4 Part 4 Assignment
//       </h3>
      
//       <div style={{ border: '2px solid black', borderRadius: '10px', padding: '10px', marginBottom: '15px' }}>
//         <p style={{ color: 'black', margin: 0 }}>
//           This assignment focuses on the creation of a professional Literacy Instructional Guide website...
//           {/* (Your text continues here) */}
//         </p>
//       </div>

//       <p style={{ fontSize: '14px', color: 'black', marginBottom: '15px' }}>
//         Preview of Module 4 Part 4 Assignment 
//       </p>

//       {/* --- Section 1 --- */}
//       <iframe 
//         style={{ borderRadius: '15px', width: '100%', height: '600px', border: '2px solid #eaeaea', marginBottom: '10px' }}
//         src={pdfPath1} title="PDF 1"
//       ></iframe>
//       <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//         <a href={pdfPath1} download>
//           <button style={{ backgroundColor: '#4A90E2', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
//              Download Part of Assigment
//           </button>
//         </a>
//       </div>

//       {/* --- Section 2 --- */}
//       <iframe 
//         style={{ borderRadius: '15px', width: '100%', height: '600px', border: '2px solid #eaeaea', marginBottom: '10px' }}
//         src={pdfPath2} title="PDF 2"
//       ></iframe>
//       <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//         <a href={pdfPath2} download>
//           <button style={{ backgroundColor: '#4A90E2', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
//             Download Part of Assigment 
//           </button>
//         </a>
//       </div>



//     </div>
//   )

// }

// export default (Mod4)



// /////////


import React from 'react';

const Mod4 = () => {
  const pdfPath1 = `./Teacher Prep Lesson Plan Format mod 4 (4).pdf`; 
  const pdfPath2 = `./Essay and link to Mind Map (1).pdf`;

  return (
    <div className="mod-container">
      <h2 className="mod-title">
        Module 4 Part 4 Assignment
      </h2>
      
      <div className="glass-box">
        <p>
          This assignment focuses on the creation of a professional Literacy Instructional Guide website...
          {/* (Your text continues here) */}
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Module 4 Part 4 Assignment 
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

export default Mod4;