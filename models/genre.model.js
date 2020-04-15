const mongoose = require("mongoose");

const { Schema } = mongoose;

const genreSchema = Schema({
  name: {
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

const genre = mongoose.model("genre", genreSchema);
module.exports = genre;
