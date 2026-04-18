import { Link, useNavigate } from "react-router-dom"

const NavForMtwo = () => {
  
    const nav = useNavigate()

    const FUNC = (e) => {

        e.stopPropagation()

        nav("/Virtual Gallery Walk: Rubrics Analyzed: Good, Bad, and Ugly")

    }
  
  
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

            {/* <select>
                <option onClick={FUNC}>Gallary walk</option>
            </select> */}
            
            <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Home</Link>
            <Link to="/A Growth Mindset" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Growth Mindset</Link>
            {/* <Link to="/Mind map using Google Drawing" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Mind map using Google Drawing</Link> */}
            {/* <Link to="/Building Mathematical Dispositions Posters" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>poster</Link> */}
            {/* <Link to="/Naming Standards and Diversifying Instruction" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Naming Standards and Diversifying Instruction</Link> */}
            <Link to="/Naming Standards and Diversifying Instruction" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Diversifying Instruction</Link>
            <Link to="/Virtual Gallery Walk: Rubrics Analyzed: Good, Bad, and Ugly" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Assessment</Link>
            <Link to="/Auth" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Post Page</Link>
            </nav>
        </>

  )
}

export default NavForMtwo