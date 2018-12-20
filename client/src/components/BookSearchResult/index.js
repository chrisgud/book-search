import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const styleButton = {
    marginLeft: 5,
    width: 150,
    height: 50
}
const styleDiv = {
    padding: 20,
}

export default class BookSearchResult extends React.Component {

    render() {
        return (
            <div style={styleDiv} className="border border-dark">
                <Row>
                    <Col md="auto">
                        <span style={{ fontSize: "1.5em" }}>{this.props.title}</span><br />
                        {this.props.authors}
                    </Col>
                    <Col>{(this.props.saved)
                        ? <Button style={styleButton} className="float-right" onClick={() => this.props.handleDelete(this.props.googleId)}>Delete</Button> :
                        <Button style={styleButton} className="float-right" onClick={() => this.props.handleSave(this.props.googleId)}>Save</Button>}
                        <a href={this.props.link}><Button style={styleButton} className="float-right">View</Button></a>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md="auto">
                        <img src={this.props.image} alt={this.props.title} />
                    </Col>
                    <Col>
                        <div style={{ fontSize: '1.2em'}}>
                            {this.props.description}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

