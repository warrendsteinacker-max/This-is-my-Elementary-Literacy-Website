import React from 'react'

const FieldWork = () => {



    const pdfPath = "./Math Two Think Puzzle Explore Template.pdf";
    const pdfPath1 = "./math two assig for 3 posters.pdf";
    const pdfPath2 = "./Math 2 Mind Map Assignment.pdf";

  return (

    <>
    <NavForMtwo/>
    <div className="mod-container">
      <h2 className="mod-title">A Growth Mindset Assignment</h2>
      
      <div className="glass-box">
        <p>
          The Growth Mindset Think Puzzle Explore assignment focuses on helping educators cultivate resilient learners who view challenges as opportunities for development. The primary purpose is for students to evaluate their current knowledge of growth mindsets and identify specific areas for deeper investigation based on the research of Carol Dweck and the initial chapters of Mathematical Mindsets. The submission must be a digital document titled with the required naming convention and include the student name and date.

          The directions require a thorough review of the assigned readings and the specified Ted Talk followed by the completion of a structured template. The first section titled Think requires eight to ten detailed observations regarding the definition and practical application of a growth mindset in a classroom setting. The second section titled Puzzle must contain eight to ten original questions that provoke further thought about the topic. Finally, the Explore section involves selecting one question from the puzzle list and providing a comprehensive response consisting of at least three detailed ideas that demonstrate a deeper understanding of the subject matter.
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
      <h2 className="mod-title">Building Mathematical Dispositions Posters Assignment</h2>
    <div className="glass-box">
        <p>
            The Building Mathematical Dispositions Posters assignment aims to help educators create classroom environments where students feel confident to tackle new concepts and engage in deep reflection. The purpose is to foster resilience and problem solving skills by encouraging students to think differently and ask meaningful questions. This project requires the creation of three distinct posters using digital design tools like Canva or Piktochart, with the finished products being uploaded to specific folders within a shared drive.

            The first poster must focus on building brave mathematicians by visually representing themes of perseverance, the value of making mistakes, risk taking, and self reliance. The second poster should emphasize how great minds think differently by highlighting the process of reaching an answer, making connections between various ideas, and utilizing multiple strategies. The third poster addresses the importance of thinking through questioning, which includes the use of teacher talk moves, assessment of understanding, and the distinction between questions and statements. Each poster must be submitted in a digital format with the required naming convention and personal identifying information included on the document.
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
           <div className="mod-container">
      <h2 className="mod-title">Mind map Using Goolge Drawing Assignment</h2>
      
      <div className="glass-box">
        <p>
            The Mind Map Using Google Drawing assignment is designed to help students demonstrate their understanding of effective mathematical communities by organizing key concepts into a visual hierarchy. The purpose is to integrate pedagogical knowledge from the first two chapters of the text Thinking Together with digital proficiency. While the assignment title specifically highlights Google Drawing as the primary tool, students are expected to submit their work in a digital format, which allows for the use of other applications as long as the final product meets the structural and content requirements of the project.

            The instructions require students to watch a specific tutorial on mind mapping to understand how to express and organize ideas effectively. The resulting map must focus on what a positive mathematical community looks like, sounds like, and feels like based on the assigned readings. To meet the evidence expectations, the map must be specific and detailed, featuring at least three layers of information extending beyond the central bubble. The final digital submission must follow the designated naming convention and include the student name and date to ensure proper credit and organization.
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Assignment 
      </p>
      
      <iframe 
        className="pdf-viewer"
        src={pdfPath2}  
        title="Assignment Preview"
      ></iframe>

      <div style={{ textAlign: 'center' }}>
        <a href={pdfPath2} download="project-1-2-1.pdf">
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