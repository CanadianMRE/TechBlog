const router = require("express").Router();
const { Comment, User, Post } = require("../../models");

// GET the homepage
router.get("/:id", async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { id: req.params.id },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("home", {
      posts,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
