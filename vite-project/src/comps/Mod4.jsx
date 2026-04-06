

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
import {Link} from "react-router-dom"

const Mod4 = () => {
  const pdfPath1 = `./Teacher Prep Lesson Plan Format mod 4 (4).pdf`; 
  const pdfPath2 = `./Essay and link to Mind Map (1).pdf`;

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
        Module 4 Part 4 Assignment
      </h2>
      
      <div className="glass-box">
        <p>
          This assignment includes a comprehensive lesson plan and assessment strategy focused on integrating word recognition, vocabulary, and comprehension for third grade students. The lesson is designed around the theme of community helpers, where students use complex word recognition strategies to build decoding skills while simultaneously expanding their academic vocabulary. By engaging in a picture walk and partner reading, students practice using prior knowledge to make sense of texts, which directly supports their developing reading fluency. The project utilizes a story map as a summative assessment to track how well students can organize key details and apply new vocabulary words in context. Through the use of leveled materials and immediate feedback, the lesson demonstrates how to scaffold instruction to ensure that readers can bridge the gap between recognizing individual words and understanding the deep meaning and themes of a story.
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
    </>
  );
};

export default Mod4;