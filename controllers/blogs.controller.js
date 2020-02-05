const Blog = require('../models/blogs.models')
require('../routes/blogs.routes')
const {userLogin} = require('../controllers/user.controller')

const createBlog = async (req,res)=>{
    const blog = new Blog({
        ...req.body,
        userId: req.user._id,
        userName:req.user.Email
    })
    try{
        await blog.save()
        res.status(200).send('created')
    }
    catch(e){
        res.status(400).send()
    }
    
}

const displayBlogs = async(req,res)=>{
   
   try{
    const allBlogs = await Blog.find()
    res.status(200).send(allBlogs)
   } 
   catch(e){
       res.status(400).send()
   }
}


module.exports={
    createBlog,
    displayBlogs
}