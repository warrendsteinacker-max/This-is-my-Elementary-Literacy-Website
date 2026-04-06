import { Link } from "react-router-dom"

const NavForMtwo = () => {
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
                <p style={{ margin: 0, fontSize: '14px', color: 'black' }}>
                Welcome to my Elementary Mathematics Two Section!
                </p>
            </div>
            
            <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Home</Link>
            <Link to="/A Growth Mindset" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>A Growth Mindset</Link>
            <Link to="/Mind map using Google Drawing" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Mind map using Google Drawing</Link>
            <Link to="/Building Mathematical Dispositions Posters" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Building Mathematical Dispositions Posters</Link>
            <Link to="/Naming Standards and Diversifying Instruction" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Naming Standards and Diversifying Instruction</Link>
            <Link to="/Virtual Gallery Walk: Rubrics Analyzed: Good, Bad, and Ugly" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Virtual Gallery Walk: Rubrics Analyzed: Good, Bad, and Ugly</Link>
            </nav>
        </>

  )
}

export default NavForMtwo