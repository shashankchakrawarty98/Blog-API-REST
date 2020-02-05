const jwt = require('jsonwebtoken')
const User = require('../models/users.models')

const auth = async (req, res, next) => {
    try {
        let token = req.header('Authorization');
        if (!token) {
            throw new Error("not a token");
        }
        token = token.replace('Bearer', '');
        let user_id;
        let decoded = jwt.verify(token, 'heyy', function (err, decoded) {
            if (err) { console.log("Errrrorrrrrr-------", err); }
            user_id = decoded._id;
        });
        console.log("Decoded ID-----------------", user_id);
        const user = await User.find({ _id: user_id, 'tokens.token': token });

        console.log("middleware name>>>>>>>>>>>>>>", user[0].FirstName)
        if (!user) {
            throw new Error("")
        }
        req.token = token
        req.user = user[0]

        next()

    } catch (e) {
        console.log({ e })
        res.status(404).send({ error: e });
    }
}

module.exports = auth