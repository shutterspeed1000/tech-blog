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


//delete post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Posts.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;
