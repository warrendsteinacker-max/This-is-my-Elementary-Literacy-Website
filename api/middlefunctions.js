import jwt from "jsonwebtoken"


function protection(req, res) {

const token = req.headers.authorization.split (" ")[1]

  
if(token){
  
try {

  const decoded = jwt.verify(token, process.env.token)
if(!decoded){


  throw new Error("invalid token")

  
}

  next()

}
catch(error){

  if (error.message === "invalid token"){

    res.status(401)

}

  else {
res.status(500)

  } 
  
}

}
}



export default protection
