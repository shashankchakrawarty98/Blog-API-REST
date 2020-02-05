const commentModel = require('../models/comments.models')
require('../routes/comments.routes')
require('../models/users.models')
require('../models/blogs.models')

const createComment = async (req,res)=>{
    const comment = new commentModel({
        ...req.body,
        userId: req.user._id,
        
    })
    console.log(comment)
    try{
        await comment.save()
        res.status(200).send(comment)
    }
    catch(e){
        res.status(400).send(e)
    }
    
}

const getComments = async (req,res)=>{
    try{
            const fetchComments = await commentModel.find()
            res.status(200).send(fetchComments)
    }catch(e){
            res.status(400).send(e)
    }
}

const fetchUserComments = async(req,res)=>{
    try{
            const getUserComment = await commentModel.find(req.params.userId)
            console.log(getUserComment)
            res.status(200).send(getUserComment)
    }
    catch(e){
            res.status(400).send(e)
    }
}
module.exports={
    createComment,
    getComments,
    fetchUserComments
}