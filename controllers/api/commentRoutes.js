const router = require("express").Router();
const { Comments } = require("../../models/");
const withAuth = require("../../utils/auth");

// create new comments
router.post("/", withAuth, async (req, res) => {
  try {
    const newPost = await Comments.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    console.log(newPost);
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
