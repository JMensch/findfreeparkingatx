import React, { Component } from "react";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="title-container">Find Free Parking ATX</div>

        <div>
          <input placeholder="Search for a location" />
        </div>

        <div>
          <button className="primary">Find Near Me</button>
        </div>

        <div>
          <button className="secondary">View Favorite Locations</button>
        </div>
      </div>
    );
  }
}

export default Home;
