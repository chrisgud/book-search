import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  getSavedBooks: function() {
    return axios.get("/api/books/saved");
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  storeBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  saveBook: function(id) {
    return axios.post('/api/books/saved/' + id);
  },
  searchBooks: function (book) {
    return axios.get('https://www.googleapis.com/books/v1/volumes?q=' + book);
  }
};
