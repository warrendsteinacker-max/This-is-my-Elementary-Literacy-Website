import {Link} from "react-router-dom"

const NavForH = () => {
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
                  Welcome to my Elementary Skills Website!
                </p>
              </div>
              
                <Link to="/EL1" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Go to Elementary Literacy Section</Link>
                <Link to="/Elementary_Mathematics_Home" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Go to Elementary Math Section</Link>
                <Link to="/Auth" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Post Page</Link>
            </nav>
            </>
  )
}

export default NavForH