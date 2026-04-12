import {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'

const Auth = () => {

    const nav = useNavigate()

    const BASE_URL = 'https://this-is-my-elementary-literacy-webs.vercel.app'

    const [E, setE] = useState(false)

    const [login, setL] = useState(false)

    const [create, setC] = useState(true)

    const [user, setU] = useState("")

    const [pass, setP] = useState("")

    const D = {pass: pass, user: user}

    
   async function FUNC(e) {

    e.preventDefault()
        try{
            if(login){
               const res = await fetch(`${BASE_URL}/api/login`, {method: "POST", headers: {"Content-Type" : "application/json"}, body: JSON.stringify(D)})
               
                console.log(res)

               if(res.status === 403){
                alert("User not found. Try again or create account.")
                setE(false)
                return
               }

               if(!res.ok){
                setE(true)
                throw new Error("Server Down")
               }

               setE(false)
               nav("/postP")
            }
            else if(create){
                const res = await fetch(`${BASE_URL}/api/makeA`, {method: "POST", headers: {"Content-Type" : "application/json"}, body: JSON.stringify(D)})
                
                console.log(res)


               if(res.status === 403){
                alert("User already exists. Try a diffrent username or password.")
                setE(false)
                return
               }

               if(!res.ok){
                setE(true)
                throw new Error("Server Down")
               }


               setE(false)
               nav("/postP")
            }
        }
        catch(error){
            console.error(error.message)
        }
    }
    

  return (
        <>
        <Link to="/" style={{textDecoration: "none", color: "blue", position: "fixed"}}>Go Back to Home Page</Link>
        <div style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column", minHeight: "100vh"}}>
        {create ? <h1>Create Account</h1> : <h1>Login</h1>}
        <form onSubmit={FUNC} style={{justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column"}}>
            <input value={pass} onChange={(e) => setP(e.target.value)} style={{fontSize: "20px", margin: "25px", color: "white", backgroundColor: "black", width: "450px", height: "35px", borderRadius: "8px"}} type="text" placeholder="Password"/>
            <input value={user} onChange={(e) => setU(e.target.value)} style={{fontSize: "20px", margin: "25px", color: "white", backgroundColor: "black", width: "450px", height: "35px", borderRadius: "8px"}} type="text" placeholder="Username"/>
            <button type="submit">Submit</button>
        </form>
        {E && <p style={{color: "red"}}>Server down. Try again later.</p>}
        <div style={{margin: "35px", border: "5px solid black", borderRadius: "8px"}}>
            <button style={{margin: "35px"}} onClick={() => {
                setC(false)
                setL(true)
            }}>
                Have a Account? Login?
            </button>
            <button style={{margin: "35px"}} onClick={() => {
                setC(true)
                setL(false)
            }}>
                Dont Have a Account? Create?
            </button>
        </div>
        </div>    
        </>
  )
}

export default Auth