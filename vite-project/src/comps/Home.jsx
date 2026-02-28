import MeAI from './MeAI'

const Home = () => {
  return (
    <div style={{fontFamily: 'Georgia'}}>
        <h1 style={{color: 'black', fontWeight: 'bold', fontSize: '6rem', textDecoration: 'underline'}}> My Elementary Literacy Skills Website</h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '100px', borderRadius: '10px', border: '10px solid black', padding: '5px'}}>
            <img src="me.jpg" alt="Logo" style={{width: '300px', height: '300px', borderRadius: '10px'}}/>
            <p style={{fontSize: '1rem', color: 'black'}}>Hello, my name is Warren Steinacker. Welcome to my Elementary Literacy Skills Website!</p>
        </div>
        <div>
            <p style={{color: 'black'}}>This website is a comprehensive overview that documents the literacy training process covered in this class. It tracks the progression from the synthesis of assignments across distinct Modules, Module 1 through Module 7. Ask my AI assistent any question you would like below, and Ask me any qustion you like in the post page.</p>
        </div>
        <MeAI/>
    </div>
  )
}

export default Home

////////////////////////////