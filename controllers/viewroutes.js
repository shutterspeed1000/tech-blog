const router = require('express').Router();
const {Users, Posts, Comments} = require('../models');


router.get('/post', (req, res) => {
  res.render('post');
});
 

router.get('/blog', async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const blogPosts = await Posts.findAll(
{
  include: [{ model: Users }, { model: Comments }]
}
  );
  const retPosts = blogPosts.map(post => post.get({ plain: true }))

  // Return the bookData promise inside of the JSON response
  console.log(retPosts)
  res.render('blog',{retPosts})
});


router.get('/', async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const blogPosts = await Posts.findAll(
{
  include: [{ model: Users }]
}
  );
  const retPosts = blogPosts.map(post => post.get({ plain: true }))

  // Return the bookData promise inside of the JSON response
  console.log(retPosts)
  res.render('homepage',{retPosts, loggedin: false})
});


//Login Page
router.get('/login', async (req, res) => {
  res.render('login')
});


//dash Page
router.get('/dash', async (req, res) => {
  res.render('dash')
});


  module.exports = router;