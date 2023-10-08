const router = require("express").Router();
const { Comments } = require("../../models/");
const withAuth = require('../../utils/auth');

router.post("/", async (req, res) => {
    try {
      const newPost = await Comments.create(req.body);
      res.status(200).json(newPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;