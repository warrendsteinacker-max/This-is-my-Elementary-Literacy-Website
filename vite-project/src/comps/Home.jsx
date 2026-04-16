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
            <p style={{fontSize: '1rem', color: 'black'}}>Hello, my name is Warren Steinacker. Welcome to my Elementary Skills Website! I am a student at Baker College how is studying to become a elementary teacher.</p>
        </div>
        <div>
            <p style={{color: 'black'}}>
              This website is a comprehensive overview that documents the Elementary training process covered through Backer College. It tracks the progression from the synthesis of assignments across curriculum for teaching grades Pk-6. Ask my AI assistant any question you would like below, and ask me any question you like in the post page. You may also communicate to others by commenting on there posts.
            </p>
        </div>
        <MeAI/>

        <h1>Resume:</h1>
    <hr/>
    <hr/>
        <h1>Contact Information:</h1>
    <hr/>
        <p>Phone Number: 231-878-0753</p>
        <p>Email: warrendsteinacker@gmail.com</p>
    <hr/>
    <hr/>

    <h1>Educational Philosophy:</h1>
    <hr/>
    <p>
      I believe that every student is an architect of their own understanding. Just as a software application requires a robust backend to handle data and a clean frontend to engage the user, an elementary education must provide children with both the foundational logic, the backend of literacy and numeracy, and the creative interface, exploration and expression, to navigate the world
    </p>
    </div>
    </>
  )
}

export default Home

////////////////////////////