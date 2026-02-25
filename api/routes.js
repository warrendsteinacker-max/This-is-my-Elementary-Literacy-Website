import express from 'express'
import { post1, post2, post3, post4, post5, post6, post7, post8, post9 } from './C.js'

const router = express.Router()


router.post('/1', post1)
router.post('/2', post2)
router.post('/3', post3)
router.post('/4', post4)
router.post('/5', post5)
router.post('/6', post6)
router.post('/7', post7)
router.post('/8', post8)
router.post('/9', post9)


export default router