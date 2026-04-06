import NavForMtwo from "./NavForMtwo"

const MatDisPosters = () => {

    const pdfPath = "./math two assig for 3 posters.pdf";

  return (
    <>
        <NavForMtwo/>
        <div className="mod-container">
      <h2 className="mod-title">Module 3 Assignment</h2>
      
      <div className="glass-box">
        <p>
            The Building Mathematical Dispositions Posters assignment aims to help educators create classroom environments where students feel confident to tackle new concepts and engage in deep reflection. The purpose is to foster resilience and problem solving skills by encouraging students to think differently and ask meaningful questions. This project requires the creation of three distinct posters using digital design tools like Canva or Piktochart, with the finished products being uploaded to specific folders within a shared drive.

            The first poster must focus on building brave mathematicians by visually representing themes of perseverance, the value of making mistakes, risk taking, and self reliance. The second poster should emphasize how great minds think differently by highlighting the process of reaching an answer, making connections between various ideas, and utilizing multiple strategies. The third poster addresses the importance of thinking through questioning, which includes the use of teacher talk moves, assessment of understanding, and the distinction between questions and statements. Each poster must be submitted in a digital format with the required naming convention and personal identifying information included on the document.
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

export default MatDisPosters