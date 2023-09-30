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
  
    // Return the bookData promise inside of the JSON response
    return res.json(blogPosts);
  });


  


  module.exports = router;