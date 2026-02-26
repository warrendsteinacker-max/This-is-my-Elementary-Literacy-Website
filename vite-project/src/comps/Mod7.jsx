import React from 'react'

const Mod7 = () => {

    const pdfPath1 = `./Teacher Prep Lesson Plan Format (7) (1).pdf`; 
    const pdfPath2 = `./Mod 7 assig essay (1).pdf`;
    

    

    return (<div className="preview-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h3 style={{ fontFamily: 'sans-serif', color: 'black' }}>
        Module 7 Part 7 Assignment
      </h3>
      
      <div style={{ border: '2px solid black', borderRadius: '10px', padding: '10px', marginBottom: '17px' }}>
        <p style={{ color: 'black', margin: 0 }}>
          This assignment focuses on the creation of a professional Literacy Instructional Guide website...
          {/* (Your text continues here) */}
        </p>
      </div>

      <p style={{ fontSize: '17px', color: 'black', marginBottom: '17px' }}>
        Preview of Module 7 Part 7 Assignment 
      </p>

      {/* --- Section 1 --- */}
      <iframe 
        style={{ borderRadius: '17px', width: '100%', height: '700px', border: '2px solid #eaeaea', marginBottom: '10px' }}
        src={pdfPath1} title="PDF 1"
      ></iframe>
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <a href={pdfPath1} download>
          <button style={{ backgroundColor: '#7A90E2', color: 'white', padding: '12px 27px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
             Download Part of Assigment
          </button>
        </a>
      </div>

      {/* --- Section 2 --- */}
      <iframe 
        style={{ borderRadius: '17px', width: '100%', height: '700px', border: '2px solid #eaeaea', marginBottom: '10px' }}
        src={pdfPath2} title="PDF 2"
      ></iframe>
      <div style={{ textAlign: 'center', marginBottom: '70px' }}>
        <a href={pdfPath2} download>
          <button style={{ backgroundColor: '#7A90E2', color: 'white', padding: '12px 27px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontWeight: 'bold' }}>
            Download Part of Assigment 
          </button>
        </a>
      </div>



    </div>
  )

}

export default (Mod7)