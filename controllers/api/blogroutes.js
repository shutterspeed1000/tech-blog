const router = require("express").Router();
const { Posts } = require("../../models/");
const withAuth = require('../../utils/auth');


// create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Posts.create(
      {
        // what are these 3 dot!
       ...req.body, user_id: req.session.user_id,}
      
      
    );
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});





module.exports = router;
