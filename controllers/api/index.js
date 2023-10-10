const router = require("express").Router();
const userRoutes = require("./userRoutes");
const blogRoutes = require("./blogroutes");
const commentRoutes = require("./commentRoutes");

router.use("/users", userRoutes);
router.use("/posts", blogRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
