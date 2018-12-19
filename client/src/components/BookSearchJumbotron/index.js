import React from "react";
import { Jumbotron } from 'reactstrap';

const styleBookSearchJumbotron = {
  clear: "both",
  marginTop: 30,
  marginBottom: 30,
  textAlign: "center"
}

function BookSearchJumbotron({ children }) {
  return (
      <Jumbotron style={styleBookSearchJumbotron} className="border border-dark">
      {children}
      </Jumbotron>
  );
}

export default BookSearchJumbotron;
