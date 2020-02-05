const mongoose = require('mongoose')
const Blog = require('../models/blogs.models')
const User = require('../models/users.models')

const commentSchema = new mongoose.Schema({
       text:{
            type:String,
             },

    blogId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    }
},{ timestamps:true})






const commentModel = mongoose.model('Comments',commentSchema)
module.exports = commentModel