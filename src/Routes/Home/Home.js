import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <Row>
          <Col xs={12} className="title-container">
            <h1>Find Free Parking ATX</h1>
          </Col>

          <Col xs={12} sm={6} smOffset={3}>
            <Row className="section-wrapper">
              <Col xs={12}>
                <div class="input-wrapper">
                  <input placeholder="Search for a location" />
                </div>
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
