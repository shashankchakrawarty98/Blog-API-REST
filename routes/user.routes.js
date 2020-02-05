const express = require('express')
const router = express.Router();
const {createUsers,userLogin} =  require('../controllers/user.controller')
const auth = require('../middleware/auth')
router.post('/userSignup',createUsers)
router.get('/userLogin',userLogin)


module.exports = router;