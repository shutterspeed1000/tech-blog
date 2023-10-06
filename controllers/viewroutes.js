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

// return main page of blog posts ordered new to old
router.get('/', async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const blogPosts = await Posts.findAll(
{
  include: [{ model: Users }],
  order: [['createdAt', 'DESC']],
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


// //dash Page
// router.get('/dashboard', async (req, res) => {
//   res.render('dashboard',{logged_in: req.session.logged_in})
// });


// return dashboard page of  a users blog posts ordered new to old
router.get('/dashboard', async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const blogPosts = await Posts.findAll(
{
  where: { email: "pw@pw.com" },
  include: [{ model: Users }],
  order: [['createdAt', 'DESC']],
}
  );
  const retPosts = blogPosts.map(post => post.get({ plain: true }))

  
  console.log(retPosts)
  res.render('dashboard',{retPosts, logged_in: req.session.logged_in})
});


  module.exports = router;