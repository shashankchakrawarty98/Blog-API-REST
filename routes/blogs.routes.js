const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const {createBlog,displayBlogs} = require('../controllers/blogs.controller')

router.post('/createBlog',auth,createBlog)
router.get('/displayBlogs',displayBlogs)

module.exports = router