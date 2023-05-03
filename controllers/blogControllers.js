const blogModel = require('../models/blogModel');
const userModel = require('../models/userModel');
const mongoose = require('mongoose');


// @desc    Get all blogs
exports.getAllBlogsController = async (req, res) => {
    try {
        const blog = await blogModel.find({});
        if (!blog) {
            return res.status(404).send({
                message: 'No Blogs Found',
                success: false
            })
        }
        return res.status(200).send({
            BlogCount: blog.length,
            message: 'All Blogs lists',
            success: true,
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: 'Error in Getting All Blogs',
            success: false,
            error
        })
    }
}

// @desc    Get Single blogs
exports.getSingleBlogsController = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (!blog) {
            return res.status(404).send({
                message: 'No Blogs Found',
                success: false
            })
        }
        return res.status(200).send({
            message: 'Single Blog Found',
            success: true,
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: 'Getting Single Blog Error',
            success: false,
            error
        })
    }
}


// @desc    Create blogs
exports.createBlogController = async (req, res) => {
    try {
        const { title, description, image, user } = req.body;
        // Validation
        if(!title || !description || !image || !user) {
            return res.status(400).send({
                message: 'Please Enter All Fields',
                success: false
            })
        }
        // checking user blog
        const exisitingUser = await userModel.findById(user);
        // validation
        if(!exisitingUser) {
            return res.status(404).send({
                message: 'User not found',
                success: false
            })
        }

        // Create Blog
        const newBlog = new blogModel({title, description, image, user});
        // Save Blog into Spefic User using mongose session
        const session = await mongoose.startSession();
        session.startTransaction();
        await newBlog.save({session});
        exisitingUser.blogs.push(newBlog);
        await exisitingUser.save({session});
        await session.commitTransaction();

        await newBlog.save();
        return res.status(200).send({
            message: 'Blog Created Successfully',
            success: true,
            newBlog
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: 'Error while Creating Blogs',
            success: false,
            error
        })
    }
}


// @desc    Update blogs
exports.updateBlogController = async (req, res) => {
    try {
        const {id} = req.params;
        const { title, description, image } = req.body;
        const blog = await blogModel.findByIdAndUpdate(id, {...req.body}, {new: true});
        return res.status(200).send({
            message: 'Blog Updated Successfully',
            success: true,
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: 'Error in Updating Blog',
            success: false,
            error
        })
    }
}

// @desc    Delete blogs
exports.deleteBlogController = async (req, res) => {
    try {
        const blog = await blogModel
            .findByIdAndDelete(req.params.id)
            .populate("user");
        // Delete Blog from User
        await blog.user.blogs.pull(blog);
        await blog.user.save();

        return res.status(200).send({
            message: 'Blog Deleted Successfully',
            success: true,
            blog
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: 'Error in Deleting Blog',
            success: false,
            error
        })
    }
}


// @desc    GET User blogs
exports.userBlogController = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id).populate('blogs');
        if(!user) {
            return res.status(404).send({
                message: 'User Blog not found',
                success: false
            })
        }
        return res.status(200).send({
            message: 'User Blogs',
            success: true,
            user
        })
    } catch (error) {
        console.log(error);
        return res.status(400).send({
            message: 'Error in Getting USERS Blog',
            success: false,
            error
        })
    }
}

// There is error in this code so please fix it in Delete Blog Controller. 
// start with 1:36:00


