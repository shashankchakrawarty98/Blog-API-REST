const express = require('express')
const router = express.Router();
const {createComment,getComments,fetchUserComments} =  require('../controllers/comments.controller')
const auth = require('../middleware/auth')
router.post('/createComment',auth,createComment)
router.get('/fetchComments',getComments)
router.get('/fetchUserComments/:id',fetchUserComments)



module.exports = router;