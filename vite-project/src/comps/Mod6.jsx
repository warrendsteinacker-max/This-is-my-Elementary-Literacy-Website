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
import {Link} from "react-router-dom"

const Mod6 = () => {
  const pdfPath1 = `./Teacher Prep Lesson Plan Format (6) (1).pdf`; 
  const pdfPath2 = `./Mod 6 assig essay (1).pdf`;

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
    </>
  );
};

export default Mod6;
