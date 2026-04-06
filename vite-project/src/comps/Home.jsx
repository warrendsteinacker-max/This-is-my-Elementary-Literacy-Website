import MeAI from './MeAI'
import NavForH from './NavForH.jsx'

const Home = () => {
  return (
    <>
    <NavForH/>
    <div style={{fontFamily: 'Georgia'}}>
        <h1 style={{color: 'black', fontWeight: 'bold', fontSize: '6rem', textDecoration: 'underline'}}> My Elementary Literacy Skills Website</h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '100px', borderRadius: '10px', border: '10px solid black', padding: '5px'}}>
            <img src="me.jpg" alt="Logo" style={{width: '300px', height: '300px', borderRadius: '10px'}}/>
            <p style={{fontSize: '1rem', color: 'black'}}>Hello, my name is Warren Steinacker. Welcome to my Elementary Skills Website!</p>
        </div>
        <div>
            <p style={{color: 'black'}}>
              This website is a comprehensive overview that documents the Elementary training process covered through Backer College. It tracks the progression from the synthesis of assignments across curriculum for teaching grades Pk-6. Ask my AI assistant any question you would like below, and ask me any question you like in the post page. You may also communicate to others by commenting on there posts.
            </p>
        </div>
        <MeAI/>
    </div>
    </>
  )
}

export default Home

////////////////////////////