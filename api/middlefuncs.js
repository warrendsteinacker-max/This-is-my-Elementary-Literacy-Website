import { request } from "express";
import jwt from "jsonwebtoken";

const check = (req, res, next) => {

    try{
        if(req.headers && req.headers.authorization){
            const token = request.headers.authorization.split(" ")[1]

            const decoded = jwt.verify(token, process.env.AUTH_KEY)
            
            if(!decoded){
                throw new Error("token is not good")
            }
        }
    }
    catch(error){
        console.log(error.message)

        if(error.message === "token is not good"){
            res.status(401).json({msg: "bad token"})
        }
        else{
            res.
        }
        
    }

}///////