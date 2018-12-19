import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import BookSearchJumbotron from "../components/BookSearchJumbotron";
import API from "../utils/API";

class Saved extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <BookSearchJumbotron>
              <h1>
                {this.state.book.title} by {this.state.book.author}
              </h1>
            </BookSearchJumbotron>
          </Col>
          {/* <Col size="md-6 sm-12">
            <BookSearchJumbotron>
              <h1>Books On My List</h1>
            </BookSearchJumbotron>
            
          </Col> */}
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
