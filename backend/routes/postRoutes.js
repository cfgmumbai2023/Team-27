const express = require('express');
const router = express.Router();

const {
  getPosts,
  addPost,
  updatePost,
  deletePost
} = require('../controller/postController');

// GET request to fetch all posts
router.get('/', getPosts);

// POST request to add a new post
router.post('/', addPost);

// PUT request to update a post
router.put('/:id', updatePost);

// DELETE request to delete a post
router.delete('/:id', deletePost);

module.exports = router;