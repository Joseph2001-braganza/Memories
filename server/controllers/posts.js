import PostMessage from "../models/postMessage.js"

export const posts=async(req,res)=>{
    // res.send('Hello from Local Host 5000')
    try {
        const postMessages=await PostMessage.find()

        res.status(200).json(postMessages)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPosts=async(req,res)=>{
    // res.send("hello also from the other side")
    const post=req.body;
    const newPost=new PostMessage(post)

    try {
        await newPost.save()
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message:error.message})
    }
}