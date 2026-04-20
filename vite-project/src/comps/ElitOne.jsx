
import {Link} from "react-router-dom"
import MeAI from './MeAI'
import NavforL from "./NavforLone"

const ElitOne = () => {
  return (
    <>
    <NavforL/>
    <div style={{fontFamily: 'Georgia'}}>
        <h1 style={{color: 'black', fontWeight: 'bold', fontSize: '6rem', textDecoration: 'underline'}}>Elementary Literacy One</h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '100px', borderRadius: '10px', border: '10px solid black', padding: '5px'}}>
            <img src="me.jpg" alt="Logo" style={{width: '300px', height: '300px', borderRadius: '10px'}}/>
            <p style={{fontSize: '1rem', color: 'black'}}>Welcome to Elementary Literacy One!</p>
        </div>
        <div>
            <p style={{color: 'black'}}>This website is a comprehensive overview that documents the literacy training process covered in Elementary Literacy One. It tracks the progression from the synthesis of assignments across distinct Modules, Module 1 through Module 7.</p>
        </div>
        <MeAI/>
    </div>
    </>
  )
}

export default ElitOne