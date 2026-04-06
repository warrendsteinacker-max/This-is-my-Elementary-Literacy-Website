import NavForMtwo from "./NavForMtwo"

const MindMapviaGoogle = () => {

    const pdfPath = "./Math 2 Mind Map Assignment.pdf";

  return (

    <>
    <NavForMtwo/>
        <div className="mod-container">
      <h2 className="mod-title">Module 2 Assignment</h2>
      
      <div className="glass-box">
        <p>
            The Mind Map Using Google Drawing assignment is designed to help students demonstrate their understanding of effective mathematical communities by organizing key concepts into a visual hierarchy. The purpose is to integrate pedagogical knowledge from the first two chapters of the text Thinking Together with digital proficiency. While the assignment title specifically highlights Google Drawing as the primary tool, students are expected to submit their work in a digital format, which allows for the use of other applications as long as the final product meets the structural and content requirements of the project.

            The instructions require students to watch a specific tutorial on mind mapping to understand how to express and organize ideas effectively. The resulting map must focus on what a positive mathematical community looks like, sounds like, and feels like based on the assigned readings. To meet the evidence expectations, the map must be specific and detailed, featuring at least three layers of information extending beyond the central bubble. The final digital submission must follow the designated naming convention and include the student name and date to ensure proper credit and organization.
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

export default MindMapviaGoogle