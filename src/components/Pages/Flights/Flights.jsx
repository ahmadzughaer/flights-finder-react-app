import React from "react";
import { Link } from "react-router-dom";

import "./Flights.style.css";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import kiwi from "../../../assets/images/kiwi-com.png";
import bravofly from "../../../assets/images/bravofly-vector-logo.png";
import flightFinder from "../../../assets/images/Flight-Finder-Logo.png";
import Kissandfly from "../../../assets/images/Kissandfly.png";
import kupibilet from "../../../assets/images/kupibilet.png";
import Mytrip from "../../../assets/images/mytrip-logo.jpg";
import aviakassa from "../../../assets/images/aviakassa-com.png";
import smartFares from "../../../assets/images/Smartfares.png";
import wingie from "../../../assets/images/Wingie.png";
import megoTravel from "../../../assets/images/MEGO.travel.png";
import myHolidays from "../../../assets/images/myholidays.png";
import biletix from "../../../assets/images/Biletix.jpg";
import banner from "../../../assets/images/FlightsFINDERBg.png";
import {
  filterdFlightArray,
  data,
  destinationCity,
} from "../HomePage/HomePage";

export let filterdDataObject = [];
function Flights() {
  // ToDo: push flights provider logo and url to be more dynamic
  const images = [
    { gate: "", img: flightFinder, url: "/" },
    { gate: "Kiwi.com", img: kiwi, url: "https://www.kiwi.com/us/" },
    { gate: "Mytrip.com", img: Mytrip, url: "https://us.mytrip.com/rf/start" },
    {
      gate: "SmartFares",
      img: smartFares,
      url: "https://us.mytrip.com/rf/start",
    },
    {
      gate: "KupiBilet.ru",
      img: kupibilet,
      url: "https://us.mytrip.com/rf/start",
    },
    {
      gate: "Aviakassa",
      img: aviakassa,
      url: "https://us.mytrip.com/rf/start",
    },
    { gate: "Bravofly", img: bravofly, url: "https://us.mytrip.com/rf/start" },
    {
      gate: "MEGO.travel",
      img: megoTravel,
      url: "https://us.mytrip.com/rf/start",
    },
    { gate: "Biletix", img: biletix, url: "https://us.mytrip.com/rf/start" },
    {
      gate: "Kissandfly",
      img: Kissandfly,
      url: "https://us.mytrip.com/rf/start",
    },
    {
      gate: "MyHolidays",
      img: myHolidays,
      url: "https://us.mytrip.com/rf/start",
    },
    { gate: "Wingie", img: wingie, url: "https://us.mytrip.com/rf/start" },
  ];

  const allDirections = data.data.directions;

  const citiesName = allDirections.filter((el1) =>
    filterdFlightArray.find((el2) => el1.iata === el2.destination)
  );

  const equalName = filterdFlightArray.map((el) => {
    el.city_name = citiesName.find((city) => {
      if (city.iata === el.destination) {
        return city.name;
      }
    });
    return el;
  });

  filterdDataObject = equalName.map((el) => {
    el.image = images.find((city) => {
      if (city.gate === el.gate) {
        return city.img;
      }
    });
    return el;
  });

  const emptyFlightList = () => {
    return (
      <div className="EmptyList">
        <h1>Sorry there is no Flights on That Date</h1>
      </div>
    );
  };

  const flightList = () => {
    return filterdDataObject.map((e) => {
   
      return (
        <React.Fragment key={e.destination}>
             <div>
        <h2 className="notFindText">
          Sorry there is no flight to <span>{destinationCity}</span> but you can
          find another destinations based on your date
        </h2>
      </div>
          <Card className="Card" key={e.destination}>
            <div className="FlightDetails">
              <div className="textDetails">
                <h3>
                  Destination: {e.city_name.name} - {e.city_name.country_name}{" "}
                </h3>
                <h4> Departure Date: {e.depart_date}</h4>
                <h4>
                  Airline: {e.airline}, Provider: {e.gate}
                </h4>
                <h4>Departure time: {Math.floor(Math.random() * 25)}:00</h4>
                <h4>Price: {Math.ceil(e.value / 23)}&#8362;</h4>
              </div>

              <Link className="BookButton" to={`/flight/${e.destination}`}>
                <Button
                  className="BookButton"
                  sx={{
                    color: "#d1a769",
                    background: "#3F4A5B",
                    width: "10em",
                    fontWeight: "bold",
                  }}
                >
                  Book
                </Button>
              </Link>
              <div className="ImgContainer">
                <img className="LogoImg" src={banner} alt="company-logo"></img>
              </div>
            </div>
          </Card>
        </React.Fragment>
      );
    });
  };
  const flightByName = () => {
    return filterdDataObject.filter((e) => {
      if (e.city_name.name === destinationCity) return e;
    });
  };

  const flightCityName = () => {
    return flightByName().map((e) => {
      return (
        <Card className="Card" key={e.destination}>
          <div className="FlightDetails">
            <div className="textDetails">
              <h3>
                Destination: {e.city_name.name} - {e.city_name.country_name}{" "}
              </h3>
              <h4> Departure Date: {e.depart_date}</h4>
              <h4>
                Airline: {e.airline}, Provider: {e.gate}
              </h4>
              <h4>Departure time: {Math.floor(Math.random() * 25)}:00</h4>
              <h4>Price: {Math.ceil(e.value / 23)}&#8362;</h4>
            </div>

            <Link className="BookButton" to={`/flight/${e.destination}`}>
              <Button
                className="BookButton"
                sx={{
                  color: "#d1a769",
                  background: "#3F4A5B",
                  width: "10em",
                  fontWeight: "bold",
                }}
              >
                Book
              </Button>
            </Link>
            <div className="ImgContainer">
              <img className="LogoImg" src={banner} alt="company-logo"></img>
            </div>
          </div>
        </Card>
      );
    });
  };
  console.log("length", flightByName().length);
  console.log("array", flightCityName());

  return (
    <div className="FlightPage">
      {flightByName().length == 1
        ? flightCityName()
        : equalName.length > 1
        ? flightList()
        : emptyFlightList()}
    </div>
  );
}

export default Flights;
