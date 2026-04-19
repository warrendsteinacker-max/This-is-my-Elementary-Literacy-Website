import { Link } from "react-router-dom"

const NavForMtwo = () => {
  

  ///////
  
    return (
        <>
            <div style={{backgroundColor: 'black', padding: '30px', borderRadius: "5px"}}> 
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
            gap: '10px', 
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
            
            <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "50px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center"}}>Home</Link>
            <Link to="/A Growth Mindset" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "60px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Growth Mindset</Link>
            {/* <Link to="/Mind map using Google Drawing" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Mind map using Google Drawing</Link> */}
            {/* <Link to="/Building Mathematical Dispositions Posters" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>poster</Link> */}
            {/* <Link to="/Naming Standards and Diversifying Instruction" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Naming Standards and Diversifying Instruction</Link> */}
            <Link to="/Naming Standards and Diversifying Instruction" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "90px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Diversifying Instruction</Link>
            <Link to="/Virtual Gallery Walk: Rubrics Analyzed: Good, Bad, and Ugly" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "90px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Assessment</Link>
            <Link to="/Auth" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "50px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Post Page</Link>
            <a href="https://www.michigan.gov/-/media/Project/Websites/mde/Literacy/Content-Standards/Math_Standards.pdf?rev=1e793e2b1e314e4fa1abc754251b5dc9" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "90px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>MDE References</a>
            <Link to="/Lesson P" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "90px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Lesson Planning</Link>
            <Link to="Tech" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "90px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Technology</Link>
            <Link to="FieldW" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "90px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center"}}>Fieldwork</Link>
            </nav>
        </>

  )
}

export default NavForMtwo