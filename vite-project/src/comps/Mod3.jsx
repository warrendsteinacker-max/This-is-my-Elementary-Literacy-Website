// import React from 'react'

// const Mod3 = () => {

//     const pdfPath1 = `./REFLECTION (1).pdf`; 
//     const pdfPath2 = `./Teacher Prep Lesson Plan Format mod 3 (3).pdf`;
//     const pdfPath3 = `./Link to flyer sec (1).pdf`;

//   return (
//     <div className="preview-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
//       <h3 style={{ fontFamily: 'sans-serif', color: 'black' }}>
//         Module 3 Part 3 Assignment
//       </h3>
      
//       <div style={{ border: '2px solid black', borderRadius: '10px', padding: '10px', marginBottom: '15px' }}>
//         <p style={{ color: 'black', margin: 0 }}>
//           This assignment focuses on the creation of a professional Literacy Instructional Guide website...
//           {/* (Your text continues here) */}
//         </p>
//       </div>

//       <p style={{ fontSize: '14px', color: 'black', marginBottom: '15px' }}>
//         Preview of Module 3 Part 3 Assignment 
//       </p>

//       {/* --- Section 1 --- */}
//       <iframe 
//         style={{ borderRadius: '15px', width: '100%', height: '600px', border: '2px solid #eaeaea', marginBottom: '10px' }}
//         src={pdfPath1} title="PDF 1"
//       ></iframe>
//       <div style={{ textAlign: 'center', marginBottom: '40px' }}>
//         <a href={pdfPath1} download>
//           <button style={{ backgroundColor: '#4A90E2', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
//             Download Lesson Plan
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

//       {/* --- Section 3 --- */}
//       <iframe 
//         style={{ borderRadius: '15px', width: '100%', height: '600px', border: '2px solid #eaeaea', marginBottom: '10px' }}
//         src={pdfPath3} title="PDF 3"
//       ></iframe>
//       <div style={{ textAlign: 'center' }}>
//         <a href={pdfPath3} download>
//           <button style={{ backgroundColor: '#4A90E2', color: 'white', padding: '12px 24px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
//             Download Flyer Part of Assigment
//           </button>
//         </a>
//       </div>

//     </div>
//   )
// }

// export default Mod3




import React from 'react';

const Mod3 = () => {
  const pdfPath1 = `./REFLECTION (1).pdf`; 
  const pdfPath2 = `./Teacher Prep Lesson Plan Format mod 3 (3).pdf`;
  const pdfPath3 = `./Link to flyer sec (1).pdf`;

  return (
    <div className="mod-container">
      <h2 className="mod-title">
        Module 3 Part 3 Assignment
      </h2>
      
      <div className="glass-box">
        <p>
          This assignment consists of a comprehensive lesson plan and a reflective analysis focused on teaching phonics and word recognition to kindergarten students. The lesson plan implements explicit phonics instruction to help students understand the relationship between letters and sounds, specifically focusing on decoding strategies to figure out unfamiliar words. Key instructional strategies include word building activities with letter tiles and the use of decodable text practice, which allow students to apply letter sound knowledge in a structured way. The accompanying reflection emphasizes the importance of systematic instruction for supporting diverse learners, including English learners and struggling readers, by providing hands on tools and visual supports like word walls. By focusing on the alphabetic principle and orthographic awareness, the project demonstrates how to help students successfully convert letters into sounds to recognize words and build reading independence.
          {/* (Your text continues here) */}
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Module 3 Part 3 Assignment 
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
            Download Lesson Plan
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

      {/* --- Section 3 --- */}
      <iframe 
        className="pdf-viewer"
        src={pdfPath3} 
        title="PDF 3"
      ></iframe>
      <div style={{ textAlign: 'center' }}>
        <a href={pdfPath3} download>
          <button className="download-btn">
            Download Flyer Part of Assigment
          </button>
        </a>
      </div>
    </div>
  );
}

export default Mod3;




///////////