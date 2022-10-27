const router = require("express").Router();
const { Comment, User, Post } = require("../../models");

// GET the homepage
router.get("/", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
