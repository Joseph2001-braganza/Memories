import express from "express"
import {posts,createPosts} from "../controllers/posts.js"

const router=express.Router()

router.get('/',posts)
router.get('/new',createPosts)

export default router;