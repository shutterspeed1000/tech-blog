const router = require('express').Router();
const Users = require('../models/users');
const Posts = require('../models/posts');
const Comments = require('../models/comments');

router.get('/', (req, res) => {
  res.render('blog', {
    title: 'My Website',
  });
});
 

router.get('/blog', async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const blogPosts = await Posts.findAll(
{
  include: [{ model: Users }, { model: Comments }]
}
  );
  const retPosts = blogPosts.map((blogPost) => blogPost.get({ plain: true }))

  // Return the bookData promise inside of the JSON response
  return res.render('blog',retPosts)
});

  module.exports = router;