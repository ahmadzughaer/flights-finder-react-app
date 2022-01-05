import React, { Component } from "react";
import { filterdDataObject } from "../Flights/Flights";
import "./FlightDetails.style.css";
class FlightDetails extends Component {
  state = { data: {} };
  specificFlight = filterdDataObject.filter((details) => {
    return details.destination === this.props.id.id;
  });

  flightList = () => {
    return this.specificFlight.map((e) => {
      return (
        <div className="Container">
          <div className="flightDetails">
            <h3>From: Tel-Aviv Yafo - Israel </h3>
            <h3>
              To: {e.city_name.name} - {e.city_name.country_name}
            </h3>
            <h3> Departure Date: {e.depart_date}</h3>
            <h3> Price: {Math.ceil(e.value / 23)}&#8362;</h3>
          </div>
          <div class="center">
          
            <form>
        
              <div class="inputbox">
                <input type="text" required="required" />
                <span>Full name</span>
              </div>
              <div class="inputbox">
                <input type="date" placeholder="" required="required" />
                <span>Date of birth</span>
              </div>
              <div class="inputbox">
                <input type="text" required="required" />
                <span>Email</span>
              </div>
              <div class="inputbox">
                <input type="button" value="submit" />
              </div>
            </form>
          </div>
        </div>
      );
    });
  };

  render() {
    return <div className="List">{this.flightList()}</div>;
  }
}

export default FlightDetails;
