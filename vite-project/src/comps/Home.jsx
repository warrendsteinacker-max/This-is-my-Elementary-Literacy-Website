import MeAI from './MeAI'

const Home = () => {
  return (
    <div>
        <h1 style={{color: 'black', fontWeight: 'bold', fontSize: '6rem', textDecoration: 'underline'}}> My Elementary Literacy Skills Website</h1>
        <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
            <img src="logo.png" alt="Logo" style={{width: '50px', height: '50px'}}/>
            <p style={{margin: 0, fontSize: '14px', color: 'black'}}>Hello, my name is Warren Steinacker. Welcome to my Elementary Literacy Skills Website!</p>
        </div>
        <div>
            <p style={{color: 'black'}}>This website is a comprehensive overview that documents the literacy training process covered in this class. It tracks the progression from the synthesis of assignments across eight distinct ones, part 1 through part 8. Ask me any question you would like below.</p>
        </div>
        <MeAI/>
    </div>
  )
}

export default Home

//////