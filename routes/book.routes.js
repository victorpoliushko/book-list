const { Router } = require("express");
const Book = require("../models/book.model");

const router = Router();
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

module.exports = router;
