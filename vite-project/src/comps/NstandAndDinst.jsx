import NavForMtwo from "./NavForMtwo"

const NstandAndDinst = () => {

    const pdfPath = "./first math lesson for math 2.pdf";

  return (

    <>

        <NavForMtwo/>
        <div className="mod-container">
      <h2 className="mod-title">Module 4 Assignment</h2>
      
      <div className="glass-box">
        <p>
        The Mathematical Standards and Practices assignment requires students to analyze state education requirements and integrate them into a functional lesson plan. The primary purpose is to help future teachers connect formal mathematical standards with practical, engaging classroom activities. This process ensures that instructional methods are aligned with the Michigan K 12 Standards for Mathematics while focusing specifically on the developmental needs of fifth or sixth grade students.

        To complete the requirements, students must review the fifth and sixth grade mathematical overviews and select a single standard to serve as the focus of the activity. This standard is then copied into the official Baker College Teacher Prep Lesson Plan Format. The assignment further requires that the selected standard be rewritten in student friendly language to ensure it is accessible to the target age group. Additionally, students must identify one mathematical practice that complements the standard and design an original, engaging activity that bridges the two. All components must be documented within the specified lesson plan template, completing all active sections while leaving the grayed out portions untouched.
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

export default NstandAndDinst