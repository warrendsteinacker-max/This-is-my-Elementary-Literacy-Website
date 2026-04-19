import React from 'react'
import {Link} from "react-router-dom"



const Elementary_Mathematics_Home = () => {
  
  
  
  return (
<>
              <nav style={{
              borderRadius: '10px', 
              position: 'sticky', 
              top: 0,  
              zIndex: 1000,
              display: 'flex', 
              gap: '20px', 
              justifyContent: 'center', 
              background: 'linear-gradient(to right, orange, pink)', 
              padding: '10px', 
              alignItems: 'center',
              marginTop: '5px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                {/* Using the imported logo variable ensures the image shows up */}
                {/* <img src={logo} alt="Logo" style={{ width: '50px', height: '50px' }} /> */}
                <p style={{ margin: 0, fontSize: '14px', color: 'black' }}>
                  Welcome to my Elementary Math Skills Section!
                </p>
              </div>
                <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "140px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Home</Link>      
                <Link to="/EM2" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "140px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Go to Elementary Math Two Section</Link>
            </nav>
        <div style={{fontFamily: 'Georgia'}}>
        <h1 style={{color: 'black', fontWeight: 'bold', fontSize: '6rem', textDecoration: 'underline'}}> Elementary Math Section</h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '100px', borderRadius: '10px', border: '10px solid black', padding: '5px'}}>
            <img src="me.jpg" alt="Logo" style={{width: '300px', height: '300px', borderRadius: '10px'}}/>
            <p style={{fontSize: '1rem', color: 'black'}}>Welcome to Elementary Math Section</p>
        </div>
        <div>
            <p style={{color: 'black'}}>
              This Elementary Math section is a comprehensive overview that documents the Elementary Mathematics training process covered in Elementary Math courses. It tracks the progression from the synthesis of assignments across modules. 
            </p>
            <h1 style={{color: "black"}}>
              
              What Literacy Means to me and how I value my Self as a Math Educator

            </h1>
            <p style={{color: "black"}}>

             Literacy is the essential foundation that allows students to decode the world, serving as the logical structure that supports all critical thinking and communication. As a math educator, I value myself as an architect of understanding, bridging technical fluency with creative problem-solving to help students build a robust framework for navigating complex ideas. 

            </p>
            <h1 style={{color: "black"}}>
              What Elementary Mathematics Means to me and how I Value Myself as a Math Educator
            </h1>
            <p style={{color: "black"}}>
              Elementary mathematics is the fundamental language of logic that empowers students to deconstruct problems and engineer their own unique solutions. I value myself as an architect of understanding who provides the essential framework for children to build both technical precision and the creative confidence to explore the world through a numerical lens.
            </p>
        </div>
        </div>
        <hr/>
        <hr/>
        <h1>
          My Mathematical Educational Philosophy
        </h1>
        <hr/>
        <p>
          
          Mathematics is not a collection of isolated rules to be memorized, but a structural language used to build understanding. This philosophy views every student as an architect of their own knowledge, where the classroom serves as the development environment for logic, patterns, and problem-solving.

        </p>
      <hr/>
      <hr/>
        <h1>Contact Information</h1>
    <hr/>
        <p>Phone Number: 231-878-0753</p>
        <p>Email: warrendsteinacker@gmail.com</p>
    <hr/>
    </>
  )
}

export default Elementary_Mathematics_Home