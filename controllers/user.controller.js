const User = require('../models/users.models')
const mongoose = require('mongoose')
require('../routes/user.routes')


const createUsers = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save();
        const token = user.generateAuthToken()
        res.status(200).send({ user });
    } catch (e) {
        console.log("<<<<<<<<,", e);
        res.status(400).send(e)

    }
}

const userLogin = async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password);
        console.log(user)
        const token = await user.generateAuthToken();
        res.send(token);
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    createUsers,
    userLogin
}