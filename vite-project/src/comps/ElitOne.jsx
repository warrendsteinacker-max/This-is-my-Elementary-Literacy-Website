import React from 'react'
import {Link} from "react-router-dom"
import MeAI from './MeAI'

const ElitOne = () => {
  return (
    <>
            <div style={{backgroundColor: 'black', padding: '30px'}}> 
                <p style={{fontWeight: 'bold' , color: 'whitesmoke'}}>
                Navigation
                </p>
                </div>
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
                      Welcome to my Elementary Literacy Section!
                    </p>
                  </div>
                  
                  <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Home</Link>
                  <Link to="/mod1" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 1</Link>
                  <Link to="/mod2" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 2</Link>
                  <Link to="/mod3" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 3</Link>
                  <Link to="/mod4" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 4</Link>
                  <Link to="/mod5" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 5</Link> 
                  <Link to="/mod6" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 6</Link>
                  <Link to="/mod7" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module 7</Link>
                  <Link to="/postP" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Post Page</Link>
                  {/* <Link to="/demo2" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module demo 2</Link>
                  <Link to="/MEAI" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module demo 2</Link>         */}
                </nav>
    <div style={{fontFamily: 'Georgia'}}>
        <h1 style={{color: 'black', fontWeight: 'bold', fontSize: '6rem', textDecoration: 'underline'}}> My Elementary Literacy Skills Website</h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '100px', borderRadius: '10px', border: '10px solid black', padding: '5px'}}>
            <img src="me.jpg" alt="Logo" style={{width: '300px', height: '300px', borderRadius: '10px'}}/>
            <p style={{fontSize: '1rem', color: 'black'}}>Hello, my name is Warren Steinacker. Welcome to my Elementary Literacy Skills Website!</p>
        </div>
        <div>
            <p style={{color: 'black'}}>This website is a comprehensive overview that documents the literacy training process covered in Elementary Literacy One. It tracks the progression from the synthesis of assignments across distinct Modules, Module 1 through Module 7. Ask my AI assistent any question you would like below, and Ask me any qustion you like in the post page. You may also communicate to others and comment on there posts</p>
        </div>
        <MeAI/>
    </div>
    </>
  )
}

export default ElitOne