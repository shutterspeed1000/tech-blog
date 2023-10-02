const router = require("express").Router();
const { Posts } = require("../../models/");



// create a new post
router.post("/", async (req, res) => {
  try {
    const newPost = await Posts.create(req.body);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
