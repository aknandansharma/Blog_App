const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true, 'Please enter a title'],
    },
    description:{
        type: String,
        required: [true, 'Please enter a description'],
    },
    image:{
        type: String,
        required: [true, 'Please enter a image'],
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, 'User Id is required']
    }
}, {timestamps: true})

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;