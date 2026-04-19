
import NavForMtwo from "./NavForMtwo"

const VgalWalk = () => {

    const pdfPath = "./mod 4 math 2 rubric assig.pdf"
    const pdfPath2 ="./part lesson plan for math mod 6.pdf"
  return (


    <>
    <NavForMtwo/>
    <div className="mod-container">
      <h2 className="mod-title">Virtual Gallery Walk and Rubric Analysis Reflection Assignment</h2>
      
      <div className="glass-box">
        <p>
        The Virtual Gallery Walk Rubrics Analyzed assignment focuses on developing the critical skills necessary for educators to evaluate and implement effective assessment tools. The purpose of the activity is to understand how rubrics maintain objective grading standards while providing students with concrete criteria to guide their learning and focus on specific objectives. Students must analyze various examples to identify characteristics that distinguish high quality assessment tools from those that are poorly constructed or confusing.

        The process begins with a review of a designated slideshow to establish a foundation in the qualities of effective rubrics. Following this review, students access a digital gallery via Padlet to conduct their analysis using their school accounts. Each rubric must be evaluated based on clarity, specificity, fairness, alignment with learning standards, and the ability to provide actionable feedback. The final task requires classifying each example as good, bad, or ugly based on whether the rubric successfully guides student performance or fails due to a lack of detail and misalignment with educational goals.
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
    <div className="mod-container">
      <h2 className="mod-title">Rubric Analysis Reflection Assignment</h2>
      
      <div className="glass-box">
        <p>
        In this assignment, I am focusing on how I can better support elementary learners by identifying their specific needs and common misconceptions in mathematics. To do this, I will be observing a math lesson during my field placement and then breaking it down using the Teacher Prep Lesson Plan Format. This involves outlining everything from the lesson goals and duration to how I would handle interventions for students who are struggling or enrichment for those who are excelling.

        The core of the task is to build a rubric that serves as a diagnostic tool. Instead of just checking for correct answers, I am designing it to help me critically analyze student work so I can see exactly where a misunderstanding might be happening. Once the rubric is finished, I have to be honest with myself and evaluate my own work by looking at the good, the bad, and the ugly. This means I will be identifying what parts of the rubric are effective, which parts are difficult to implement, and how the visual organization of the tool itself looks.

        To wrap it all up, I will write a reflection paragraph that summarizes what I learned through this process. I really want to focus on how this experience will help me write better rubrics in the future so that my assessments are always aligned with my instructional goals. Ultimately, this exercise is about learning how to use assessment data to tailor my teaching and ensure every student has the foundational logic they need to succeed in math.
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

export default VgalWalk