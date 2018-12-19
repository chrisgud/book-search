import React from "react";
import { Col, Row, Container } from "reactstrap";
import BookSearchJumbotron from "../components/BookSearchJumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <BookSearchJumbotron>
            <h1>404 Page Not Found</h1>
            <h1>
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </BookSearchJumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
