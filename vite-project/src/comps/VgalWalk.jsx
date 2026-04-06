
import NavForMtwo from "./NavForMtwo"

const VgalWalk = () => {

    const pdfPath = "./mod 4 math 2 rubric assig.pdf"
  return (


    <>
    <NavForMtwo/>
    <div className="mod-container">
      <h2 className="mod-title">Module 4 Assignment</h2>
      
      <div className="glass-box">
        <p>
        The Virtual Gallery Walk Rubrics Analyzed assignment focuses on developing the critical skills necessary for educators to evaluate and implement effective assessment tools. The purpose of the activity is to understand how rubrics maintain objective grading standards while providing students with concrete criteria to guide their learning and focus on specific objectives. Students must analyze various examples to identify characteristics that distinguish high quality assessment tools from those that are poorly constructed or confusing.

        The process begins with a review of a designated slideshow to establish a foundation in the qualities of effective rubrics. Following this review, students access a digital gallery via Padlet to conduct their analysis using their school accounts. Each rubric must be evaluated based on clarity, specificity, fairness, alignment with learning standards, and the ability to provide actionable feedback. The final task requires classifying each example as good, bad, or ugly based on whether the rubric successfully guides student performance or fails due to a lack of detail and misalignment with educational goals.
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