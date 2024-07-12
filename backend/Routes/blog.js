const express = require('express');
const router = express.Router();
const blogController = require('../Controllers/blogController');

router.post('/new-blog', blogController.createBlog);
router.get('/all-blog', blogController.getAllBlogs);
router.get('/:id', blogController.getBlogById);
router.put('/:id', blogController.updateBlog);
router.delete('/:id', blogController.deleteBlog);


module.exports = router;