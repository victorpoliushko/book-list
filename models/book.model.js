const mongoose = require("mongoose");

const { Schema } = mongoose;

const bookSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  genre: {
    type: Array,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  genres: [
    {
      type: Schema.Types.ObjectId,
      ref: "genre",
    },
  ],
});

const book = mongoose.model("book", bookSchema);
module.exports = book;
