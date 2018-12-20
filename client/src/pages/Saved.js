import React, { Component } from "react";
import { Col, Row, Container } from 'reactstrap';
import BookSearchJumbotron from "../components/BookSearchJumbotron";
import BookSearchResult from "../components/BookSearchResult";
import API from "../utils/API";

const divStyle = {
  marginBottom: 30,
  marginTop: 30,
  padding: 30,
}

class Saved extends Component {
  state = {
    books: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "" })
      )
      .catch(err => console.log(err));
  };

  handleDelete = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <BookSearchJumbotron>
              <h1>(React) Google Books Search</h1>
              <h3>Search for and Save Books of Interest</h3>
            </BookSearchJumbotron>
          </Col>
        </Row>
        <div style={divStyle} className="border border-dark">
          <h5>Saved Books</h5>
          {this.state.books.length ? (
            this.state.books.map(book => (
              <BookSearchResult key={book._id}
                googleId={book.googleId}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
                title={book.title}
                handleDelete={this.handleDelete}
                saved={book.saved} />
            ))
          ) : (
              <h3>No Results to Display</h3>
            )}
        </div>
      </Container>
    );
  }
}

export default Saved;
