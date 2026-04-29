import React from 'react'
import NavForMtwo from './NavForMtwo';

const Technology = () => {
 
 const pdfPath = "./img doc from feild work.pdf";

  return (
    <>
        <NavForMtwo/>
        <div className="mod-container">
      <h2 className="mod-title">Samples from Classwork</h2>
      
      <div className="glass-box">
        <p>
This section consists of all of the images and samples I have collected during observations.
        </p>
      </div>

      <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)', marginBottom: '10px' }}>
        Preview of Samples from Classwork 
      </p>
      
      <iframe 
        className="pdf-viewer"
        src={pdfPath}  
        title="Assignment Preview"
      ></iframe>

      <div style={{ textAlign: 'center' }}>
        <a href={pdfPath} download="project-1-2-1.pdf">
          <button className="download-btn">
            Download Samples
          </button>
        </a>
      </div>
    </div>
    </>

  )
  
}

export default Technology