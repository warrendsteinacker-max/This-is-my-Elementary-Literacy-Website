import express from 'express'
import { post1, post2, post3, post4, post5, post6, post7 } from './AIC.js'
import { getAllP, makeP, editP, deleteP, MakeAcount, LogIn } from './UserC.js'
import protection from "middlefunctions.js"

const router = express.Router()


router.get("/getall", protection, getAllP);
router.delete('/delete/:id', protection, deleteP)
router.put('/edit/:id', protection, editP)
router.post('/make', protection, makeP)
router.post('/login', LogIn)
router.post('/makeA', MakeAcount)
router.post('/1', post1)
router.post('/2', post2)
router.post('/3', post3)
router.post('/4', post4)
router.post('/5', post5)
router.post('/6', post6)
router.post('/7', post7)

////

export default router
