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
                <Link to="/EM2" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Go to Elementary Math Two Section</Link>
            </nav>
        <div style={{fontFamily: 'Georgia'}}>
        <h1 style={{color: 'black', fontWeight: 'bold', fontSize: '6rem', textDecoration: 'underline'}}> Elementary Math Section</h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '100px', borderRadius: '10px', border: '10px solid black', padding: '5px'}}>
            <img src="me.jpg" alt="Logo" style={{width: '300px', height: '300px', borderRadius: '10px'}}/>
            <p style={{fontSize: '1rem', color: 'black'}}>Welcome to Elementary Math Two!</p>
        </div>
        <div>
            <p style={{color: 'black'}}>
              This Elementary Math section is a comprehensive overview that documents the Elementary Mathematics training process covered in Elementary Math courses. It tracks the progression from the synthesis of assignments across modules. 
            </p>
        </div>
        </div>
    </>
  )
}

export default Elementary_Mathematics_Home