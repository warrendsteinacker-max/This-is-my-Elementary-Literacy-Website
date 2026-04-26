import React from 'react'
import NavForMtwo from './NavForMtwo'


export const LessonPlaning = () => {


  const pdfPath = '/This-is-my-Elementary-Literacy-Website/Online%20Website%20Evaluation%20Reflection%20Template%20(1)%20(1).pdf';  
  const pdfPath1 = '/This-is-my-Elementary-Literacy-Website/I%20Used%20to%20think..,%20Now%20I%20think.pdf';
  const pdfPath2 = '/This-is-my-Elementary-Literacy-Website/mindset_math_lesson.pdf';
  const pdfPath3 = '/assets/1-2-4.pdf';

  return (
  <>
    <NavForMtwo/>
    <div className="mod-container">
      <h2 className="mod-title">Math Fact Fluency Evaluation & Reflection Assignment</h2>
      
      <div className="glass-box">
        <p>
          This assignment is about exploring and evaluating digital tools to support math fact fluency in a way that aligns with modern educational research. I started by reading the articles by Sawchuk and Kling and Bay-Williams to establish a professional standard for what effective fluency instruction looks like, making sure to distinguish between meaningful strategy-building and unproductive practices like timed pressure or rote memorization.

          With those research-based criteria in mind, I selected and explored three different online websites from the provided list. I performed a thorough audit of each platform, specifically looking for how well they reinforce fact families, whether they are actually engaging for kids, and if the content is appropriate for the grade level I plan to teach. I also checked for differentiation features to ensure the games could be adjusted for different learning needs and made sure the navigation was user-friendly for both teachers and students. After testing them, I filled out the comparative analysis template to highlight the unique strengths and weaknesses of each site. Finally, I wrote a reflection explaining how these specific games fit into my overall teaching philosophy and the exact ways I plan to implement them in my future classroom to ensure my students develop a strong, flexible foundation in math.
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
      <h2 className="mod-title">Creative Mathematics with Manipulatives Assignment</h2>
    <div className="glass-box">
        <p>
          This assignment is about recognizing the importance of visual and creative methods in mathematics by exploring how manipulatives can build deeper understanding and support fluency. I began by watching the video on different experiences with math facts and reading the Fluency Without Fear article to ground my work in research-based strategies. These resources emphasized that all learners benefit from physically constructing and drawing mathematics rather than relying on rote memorization.

          After engaging with the content, I completed the visual thinking activity titled I used to think, Now I think. In this document, I developed five clear and connected statements that directly link my previous assumptions about math facts to the new insights I gained from the video and article. I made sure that each of my Now I think statements demonstrated a growth in my understanding of math pedagogy, supported by specific evidence from the readings. I also included five Wonder statements that reflect my curiosity and how I plan to apply these creative methods to have a positive impact in my future teaching practice. I have formatted the document with the required naming convention and personal details to ensure it is ready for submission.
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
      <h2 className="mod-title">Mathematical Mindset Aligned with Baker Format</h2>
      
      <div className="glass-box">
        <p>
          This assignment is about demonstrating how to write a formal, engaging lesson plan while diversifying instruction for different learner needs. I started by selecting a specific activity from the Mindset Mathematics textbook series, focusing on my chosen grade level to ensure the content was developmentally appropriate. I performed a deep dive into the selected lesson, thoroughly reviewing everything from the initial launch and student exploration phases to the final classroom discussion and teacher look-fors.

          I then translated that activity into the professional Baker College Teacher Prep Lesson Format, ensuring that every section was fully addressed. This process involved aligning the mindset-based activities with the appropriate standards and detailing the specific agenda items needed to keep the lesson on track. I placed a major emphasis on diversifying the instruction by explicitly planning for potential interventions for students who might struggle and enrichment opportunities for those ready for a challenge. I have finalized the document with the required naming convention and header details, showing that I can take high-quality curriculum resources and adapt them into a comprehensive, ready-to-teach plan.
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
    </>
  )
}

export default LessonPlaning
