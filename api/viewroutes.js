const router = require('express').Router();

router.get('/', async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const blogPosts = await Posts.findAll(
{
  include: [{ model: Users }, { model: Comments }]
}
  );
  const retPosts = blogPosts.map((post) => post.get({ plain: true }))
  return res.render('login', retPosts)
});


  module.exports = router;