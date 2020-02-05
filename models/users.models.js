const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const blogModel = require('./blogs.models');

const userSchema = new mongoose.Schema({
    FirstName: {
        type: String,
        required: true,
        trim: true
    },
    LastName: {
        type: String,
        required: true,
        trim: true
    },
    Email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('invalid E-mail')
            }
        }

    },
    Password: {
        type: String,
        required: true
    },
    tokens: [{
        token: {
            type: String,
            required: true,
        }
    }]
},
    { timestamps: true }
    )

// userSchema.virtual('blogs',{
//     ref:'blogModel',
//     localField:'_id',
//     foreignField:'userId'
// })

userSchema.methods.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign({ _id: user._id.toString() }, 'heyy')
    user.tokens = user.tokens.concat({ token });
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (Email, Password) => {
    const user = await User.findOne({ Email })
    console.log({ user })
    if (!user) {
        throw new Error("")
    }
    console.log(Password, user.Password)
    const isMatch = await Password === user.Password
    console.log(Password, user.Password)
    if (!isMatch) {
        throw new Error('wrong password');
    }

    return user;
}

userSchema.pre('save', async function (next) {

    const user = this;

    if (user.isModified('password')) {
        user.Password = await bcrypt.hash(user.Password, 8);
    }

    next();
});


const User = mongoose.model('User', userSchema)

module.exports = User