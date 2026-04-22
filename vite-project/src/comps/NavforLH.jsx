import React from 'react'

const NavforLH = () => {
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
              
              <Link to="/" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "70px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Home</Link>
              <Link to="/mod1" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "100px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Elementary Literacy One</Link>
              <Link to="/Auth" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold', border: "1px solid black", borderRadius: "5px", padding: "2px", backgroundColor: "black", width: "70px", height: "50px", display: "grid", justifyContent: "center", alignItems: "center" }}>Post Page</Link>
              {/* <Link to="/demo2" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module demo 2</Link>
              <Link to="/MEAI" style={{ textDecoration: 'none', color: 'blue', fontWeight: 'bold' }}>Module demo 2</Link>         */}
            </nav>
            </>

  )
}

export default NavforLH