import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Row>
          <Col xs={12} sm={4} smOffset={4}>
            <Row className="section-wrapper title-container">
              <Col xs={12}>Find Free Parking ATX</Col>
            </Row>

            <Row className="section-wrapper">
              <Col xs={12}>
                <input placeholder="Search for a location" />
              </Col>
            </Row>

            <Row className="section-wrapper">
              <Col xs={12}>
                <button className="button-primary button-large">Find Near Me</button>
              </Col>
            </Row>

            <Row className="section-wrapper">
              <Col xs={12}>
                <button className="button-secondary button-large">View Favorite Locations</button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Home;
