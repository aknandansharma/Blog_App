const express = require('express');
const { getAllBlogsController, createBlogController, updateBlogController, deleteBlogController, getSingleBlogsController } = require('../controllers/blogControllers');


// Router
const router = express.Router();


// GET || Get All Blogs
router.get('/all-blog', getAllBlogsController)

// GET || Get Single Blogs
router.get('/get-blog/:id', getSingleBlogsController)

// GET || create blog
router.post('/create-blog', createBlogController)

// PUT || update blog
router.put('/update-blog/:id', updateBlogController)

// DELETE || delete blog
router.delete('/delete-blog/:id', deleteBlogController)




module.exports = router;