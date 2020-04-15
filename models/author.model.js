const mongoose = require("mongoose");

const { Schema } = mongoose;

const authorSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: false,
  },
  bio: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "book",
    },
  ],
});

const author = mongoose.model("author", authorSchema);
module.exports = author;
