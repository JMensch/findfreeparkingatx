import React, { Component } from "react";

import "./LocationList.css";

var locationsArray = [
    {
        location: "1800 S 8th Street",
        distance: "800 ft",
    },
    {
        location: "1650 S 7th Street",
        distance: "1800 ft",
    },
    {
        location: "2170 N Nueces Street",
        distance: "2100 ft",
    }]
    
class LocationList extends Component {
    locations() //need to un-hard-code this...
    {
        var fin = []
        locationsArray.map(loc => fin.push(
            <div className="LocationList">
                <ul>
                    <li>{loc.location}
                        <ul>
                        <li>{loc.distance}</li>
                        </ul>
                    </li>      
                </ul>
            </div>
        ))

        return(fin);
    }
  render() {
    return (
        <div className="location-container">
            <div className="title-container">Nearby Parking</div>

            <div>
                <ul className="list-container">
                {this.locations()}
                </ul>
            </div>
        </div>
    );
  }
}

export default LocationList;
