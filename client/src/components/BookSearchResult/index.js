import React from 'react';
import { Row, Col, Button } from 'reactstrap';

const styleButton = {
    marginLeft: 5,
}
const styleDiv = {
    padding: 20,
}
export default class BookSearchResult extends React.Component {
    render() {
        return (
            console.log(this.props.link),
            <div style={styleDiv} className="border border-dark">
                <Row>
                    <Col md="6">
                        {this.props.title}<br />
                        {this.props.authors}
                    </Col>
                    <Col>
                        <Button style={styleButton} className="float-right" onClick={() => this.props.handleView()}>View</Button>
                        <Button style={styleButton} className="float-right" onClick={() => this.props.handleSave()}>Save</Button>
                    </Col>
                </Row>
                <br />
                <Row>
                    <Col md="2">
                        <img src={this.props.link} alt={this.props.title} />
                    </Col>
                    <Col>
                        {this.props.description}
                    </Col>
                </Row>
            </div>
        )
    }
}

