const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    googleId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [String],
        default: undefined
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    link: {
        type: String
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;