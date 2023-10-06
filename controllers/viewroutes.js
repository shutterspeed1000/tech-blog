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
  res.render('blog',{retPosts, logged_in: req.session.logged_in})
});


router.get('/', async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const blogPosts = await Posts.findAll(
{
  include: [{ model: Users }]
}
  );
  const retPosts = blogPosts.map(post => post.get({ plain: true }))

  
  console.log(retPosts)
  res.render('homepage',{retPosts, logged_in: req.session.logged_in})
});


//Login Page
router.get('/login', async (req, res) => {
  res.render('login',{logged_in: req.session.logged_in})
});

// //logout
// router.get('/logout', async (req, res) => {
//   res.render('logout',{logged_in: req.session.logged_in})
// });


//dash Page
router.get('/dash', async (req, res) => {
  res.render('dash',{logged_in: req.session.logged_in})
});


  module.exports = router;