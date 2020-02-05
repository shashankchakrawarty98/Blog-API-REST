const mongoose = require('mongoose')
const comment = require('../models/comments.models')

const blogSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    userName:{
            type:String,
            required: true,
            ref: "User"
    }
    ,
    // comments: [{
    //     comment: {
    //         type: String,
    //         required: true,
    //         ref:"comment"
    //     }
    // }]
},
    {
        timestamps: true
    })




const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog