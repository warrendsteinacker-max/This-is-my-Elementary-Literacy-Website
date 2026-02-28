
import Posts from "./schema"


export const makeP = async(req, res) => {

    const {name, title, descript} = req.body

    try{
        await Posts.create({name: name, title: title, descript: descript})
        return res.status(201).json({status: 'created'})
    }
    catch(error){
        console.error(error.message)
        return res.send(500).json({error: error.message})
    }
}