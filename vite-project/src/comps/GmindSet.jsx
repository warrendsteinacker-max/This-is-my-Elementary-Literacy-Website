import NavForMtwo from "./NavForMtwo"

const GmindSet = () => {

    const pdfPath = "./Math Two Think Puzzle Explore Template.pdf";

  return (

    <>
    <NavForMtwo/>
    <div className="mod-container">
      <h2 className="mod-title">Module 1 Assignment</h2>
      
      <div className="glass-box">
        <p>
          The Growth Mindset Think Puzzle Explore assignment focuses on helping educators cultivate resilient learners who view challenges as opportunities for development. The primary purpose is for students to evaluate their current knowledge of growth mindsets and identify specific areas for deeper investigation based on the research of Carol Dweck and the initial chapters of Mathematical Mindsets. The submission must be a digital document titled with the required naming convention and include the student name and date.

The directions require a thorough review of the assigned readings and the specified Ted Talk followed by the completion of a structured template. The first section titled Think requires eight to ten detailed observations regarding the definition and practical application of a growth mindset in a classroom setting. The second section titled Puzzle must contain eight to ten original questions that provoke further thought about the topic. Finally, the Explore section involves selecting one question from the puzzle list and providing a comprehensive response consisting of at least three detailed ideas that demonstrate a deeper understanding of the subject matter.
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

export default GmindSet