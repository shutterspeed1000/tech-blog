const router = require("express").Router();
const session = require("express-session");
const { Users, Posts, Comments } = require("../models");
const { Session } = require("express-session");
const withAuth = require("../utils/auth");

//Show mainpage - auth not needed
router.get("/", async (req, res) => {
  const blogPosts = await Posts.findAll({
    include: [
      Users,
      {
        model: Comments,
        include: [Users],
      },
    ],
    // order: [['createdAt', 'DESC']],
  });
  const retPosts = blogPosts.map((post) => post.get({ plain: true }));
  // console.log(retPosts[0].comments);
  res.render("homepage", { retPosts, logged_in: req.session.logged_in });
});

router.get("/post/:id", async (req, res) => {
  const blogPosts = await Posts.findByPk(req.params.id, {
    include: [
      Users,

      {
        model: Comments,
        include: [Users],
      },
    ],
    // order: [['createdAt', 'DESC']],
  });
  const post = blogPosts.get({ plain: true });
  console.log(post.comments);
  res.render("details", { post, logged_in: req.session.logged_in });
});

//Login Page - Auth not needed
router.get("/login", async (req, res) => {
  res.render("login", { logged_in: req.session.logged_in });
});

// return dashboard page of  a users blog posts ordered new to old - auth needed
router.get("/dashboard", withAuth, async (req, res) => {
  // Store the bookData in a variable once the promise is resolved.
  const blogPosts = await Posts.findAll({
    include: [{ model: Users }],
    order: [["createdAt", "DESC"]],
    where: {
      user_id: req.session.user_id,
    },
  });
  const retPosts = blogPosts.map((post) => post.get({ plain: true }));

  console.log(retPosts);
  res.render("dashboard", { retPosts, logged_in: req.session.logged_in });
});

// New Post page - auth needed
router.get("/newpost", withAuth, async (req, res) => {
  res.render("newPost", { logged_in: true });
});

module.exports = router;
