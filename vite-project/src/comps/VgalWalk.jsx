
import NavForMtwo from "./NavForMtwo"

const VgalWalk = () => {

    const pdfPath = "./mod 4 math 2 rubric assig.pdf"
  return (


    <>
    <NavForMtwo/>
    <div className="mod-container">
      <h2 className="mod-title">Module 1 Part 1 Assignment</h2>
      
      <div className="glass-box">
        <p>
          This assignment focuses on the creation of a professional Literacy Instructional Guide website centered on the five essential components of reading instruction for students in grades K through 3. The first portion of the project establishes a research based checklist of instructional strategies for phonemic awareness, phonics, fluency, vocabulary, and comprehension. These strategies include activities such as sound isolation, explicit phonics modeling, repeated reading, and the use of graphic organizers to support diverse learners. The second portion of the assignment requires a detailed analysis of a specific student profile named Aaliyah, who is a second grade bilingual learner transitioning from an Arabic literacy background. While she demonstrates strong listening comprehension and oral storytelling skills, she exhibits significant gaps in English phonics and word recognition. The project concludes with a reflective essay that evaluates how specific checklist strategies like multisensory sound boxes and choral reading support her needs, while also identifying the necessity for more culturally responsive practices such as explicit comparisons between right to left and left to right writing systems.
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Module 1 Part 1 Assignment 
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
    </>

  )
}

export default VgalWalk