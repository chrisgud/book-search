import React, { Component } from "react";
import BookSearchJumbotron from "../components/BookSearchJumbotron";
import BookSearchResult from "../components/BookSearchResult";
import API from "../utils/API";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const divStyle = {
  marginBottom: 30,
  marginTop: 30,
  padding: 30,
}

class Search extends Component {
  state = {
    books: [],
    title: "",
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSave = id => {
    API.saveBook(id)
    .then(res => this.loadBooks())
    .catch(err => console.log(err));
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.searchBooks(this.state.title)
        .then(res => {
          const books = res.data.items.map((el) => {
            return {
              googleId: el.id,
              authors: el.volumeInfo.authors,
              description: el.volumeInfo.description,
              image: el.volumeInfo.imageLinks.thumbnail,
              link: el.volumeInfo.infoLink,
              title: el.volumeInfo.title,
            }
          });
          const newBooks = books.filter((book) => !this.state.books.filter(e => e.googleId === book.googleId).length > 0)
          newBooks.forEach(book => API.storeBook(book));
          this.loadBooks()
        })
        .catch(err => console.log(err));
    }
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
        <Row>
          <Col size="md-12">
            <div style={divStyle} className="border border-dark">
              <h5>Book Search</h5>
              <Form style={{ marginTop: 20, marginBottom: 40 }} onSubmit={this.handleFormSubmit}>
                <FormGroup>
                  <Label for='bookTitle'>Book</Label>
                  <Input
                    type='text'
                    name='title'
                    id='bookTitle'
                    placeholder={this.props.placeholder}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
                <Button className='float-right' onClick={this.handleFormSubmit}>Search</Button>
              </Form>
            </div>
            <div style={divStyle} className="border border-dark">
              <h5>Results</h5>
              { this.state.books.length ? (
                this.state.books.filter((unsavedBook) => !unsavedBook.saved).map(book => (
                  <BookSearchResult key={book._id}
                  authors={book.authors}
                  description={book.description}
                  image={book.image}
                  link={book.link}
                  title={book.title}
                  googleId={book.googleId}
                  saved={book.saved}
                  handleSave={this.handleSave}
                   />
                ))
            ) : (
              <h3>No Results to Display</h3>
            )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Search;
