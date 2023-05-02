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
    }
}, {timestamps: true})

const blogModel = mongoose.model('Blog', blogSchema);

module.exports = blogModel;