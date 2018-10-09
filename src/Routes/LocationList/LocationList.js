import React, { Component } from "react";

import "./LocationList.css";

var locations = [
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
        return(
            <div className="LocationList">
                <ul>
                    <li>1800 S 8th Street
                        <ul>
                        <li>800 ft</li>
                        </ul>
                    </li>   
                    <li>1650 S 7th Street
                        <ul>
                        <li>1800 ft</li>
                        </ul>
                    </li> 
                    <li>2170 N Nueces Street
                        <ul>
                        <li>2100 ft</li>
                        </ul>
                    </li>    
                </ul>
            </div>
        );
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
