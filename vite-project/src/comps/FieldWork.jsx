import React from 'react'
import NavForMtwo from './NavForMtwo';


const FieldWork = () => {



    const pdfPath = "./Field Reflection Journal I Template (1).pdf";
    const pdfPath1 = "./Field Reflection Journal II – Manipulatives.pdf";


  return (

    <>
    <NavForMtwo/>
    <div className="mod-container">
      <h2 className="mod-title">Field Reflection Journal I Assignment</h2>
      
      <div className="glass-box">
        <p>
The Field Reflection Journal I assignment focuses on your observations of mathematical dispositions in a PK 6 classroom setting across ten required hours of field work. You are required to use the specific template provided in Canvas and document key logistical details for each session, including the school name, teacher, grade level, and the duration and date of the visit. Your observations must specifically identify the mathematical standards and practices being utilized during the lessons.

The main portion of the journal involves providing a thorough description of four specific focus areas, where you must provide two detailed examples for each. For the sections on Building Brave Mathematicians, Great Minds Think Differently, and Thinking Through Questioning, you need to include direct quotes and specific descriptions of what you saw and heard. You must also include a section on your takeaways for future practice, explaining how these observations will influence your own teaching. The assignment is evaluated based on the completeness of your examples and your ability to clearly name and describe the interactions you witnessed in the field.
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Assignment 
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
    <div>
      <h2 className="mod-title">Field Reflection Journal II Assignment</h2>
    <div className="glass-box">
        <p>
The Field Reflection Journal II assignment requires you to observe and analyze the use of mathematical manipulatives in a PK 6 classroom setting. You must begin by preparing for the observation by selecting a lesson where students physically interact with tools to build mathematical concepts. During the observation, you are tasked with taking detailed notes on how the teacher introduces and manages these materials, including any strategies used to redirect student behavior or maintain engagement. You must specifically document the types of manipulatives used, how they connect to the specific lesson topic, and how students react both on task and off task.

The core of the assignment is a post observation reflection worth 35 points which must be written in a paragraph format. This reflection must include a clear description of the lesson, an analysis of the teacher's instructional strategies, and a discussion on student engagement. You are required to evaluate the effectiveness of the tools used and provide a personal reflection on how this experience will shape your future teaching practices. Finally, the document must be two to three pages long, double spaced, and follow strict formatting guidelines regarding font size and margins to ensure the content is organized and professional.
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Assignment 
      </p>
      
      <iframe 
        className="pdf-viewer"
        src={pdfPath1}  
        title="Assignment Preview"
      ></iframe>

      <div style={{ textAlign: 'center' }}>
        <a href={pdfPath1} download="project-1-2-1.pdf">
          <button className="download-btn">
            Download Assignment
          </button>
        </a>
      </div>
    </div>
           
    </>

  )

}

export default FieldWork