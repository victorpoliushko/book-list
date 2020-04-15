const { Router } = require("express");
const Author = require("../models/author.model");

const router = Router();
router.get("/", async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);
    res.json(author);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});
module.exports = router;
