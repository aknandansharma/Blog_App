const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, 'username is requried']
    },
    email:{
        type: String,
        required: [true, 'email is requried']
    },
    password:{
        type: String,
        required: [true, 'password is requried']
    }
}, {timestamps: true})


const userModel = mongoose.model('User', userSchema)

module.exports = userModel