const router = require('express').Router();
const Users = require('../models/users');
const Posts = require('../models/posts');
const Comments = require('../models/comments');

router.get('/', async (req, res) => {
    // Store the bookData in a variable once the promise is resolved.
    const blogPosts = await Posts.findAll(
{
    include: [{ model: Users }, { model: Comments }]
}
    );
    const retPosts = blogPosts.map((blogPost) => blogPost.get())
  
    // Return the bookData promise inside of the JSON response
    return res.render('login', retPosts)
  });


  


  module.exports = router;