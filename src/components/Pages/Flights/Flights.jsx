import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Flights.style.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import kiwi from "../../../assets/images/kiwi-com.png";
import bravofly from "../../../assets/images/bravofly-vector-logo.png";
import flightFinder from "../../../assets/images/Flight-Finder-Logo.png";
import Kissandfly from "../../../assets/images/Kissandfly.png";
import kupibilet from "../../../assets/images/kupibilet.png";
import Mytrip   from "../../../assets/images/mytrip-logo.jpg";
import aviakassa   from "../../../assets/images/aviakassa-com.png";
import smartFares   from "../../../assets/images/Smartfares.png";
import wingie   from "../../../assets/images/Wingie.png";
import megoTravel   from "../../../assets/images/MEGO.travel.png";
import myHolidays   from "../../../assets/images/myholidays.png";
import biletix from "../../../assets/images/Biletix.jpg";
import { filterdFlightArray, data, destinationCity } from "../HomePage/HomePage";

export let filterdDataObject = [];
function Flights() {
  console.log('yayyy2', destinationCity)

  const images = [
    {gate: '', img: flightFinder, url: '/'},
    {gate: 'Kiwi.com', img: kiwi, url: 'https://www.kiwi.com/us/' }, 
    {gate: 'Mytrip.com', img: Mytrip, url: 'https://us.mytrip.com/rf/start'},
    {gate: 'SmartFares', img: smartFares, url: 'https://us.mytrip.com/rf/start'},
    {gate: 'KupiBilet.ru', img: kupibilet, url: 'https://us.mytrip.com/rf/start'},
    {gate: 'Aviakassa', img: aviakassa, url: 'https://us.mytrip.com/rf/start'},
    {gate: 'Bravofly', img: bravofly, url: 'https://us.mytrip.com/rf/start'},
    {gate: 'MEGO.travel', img: megoTravel, url: 'https://us.mytrip.com/rf/start'},
    {gate: 'Biletix', img: biletix, url: 'https://us.mytrip.com/rf/start'},
    {gate: 'Kissandfly', img: Kissandfly, url: 'https://us.mytrip.com/rf/start'},
    {gate: 'MyHolidays', img: myHolidays, url: 'https://us.mytrip.com/rf/start'},
    {gate: 'Wingie', img: wingie, url: 'https://us.mytrip.com/rf/start'},

  ]
  const allDirections = data.data.directions;

  const citiesName = allDirections.filter((el1) =>
    filterdFlightArray.find((el2) => el1.iata === el2.destination)
  );


  const equalName = filterdFlightArray.map((el) => {
    el.city_name=citiesName.find((city) => {
        if (city.iata === el.destination) {
          return  city.name;
        }
      });
      return el
   });

    filterdDataObject = equalName.map((el) => {
    el.image=images.find((city) => {
        if (city.gate === el.gate) {
          return  city.img;
        }

      });
      return el
   });
   console.log(filterdDataObject)




 const emptyFlightList = () => {
   return (
     <div className="EmptyList">
     <h1>Sorry there is no Flights on That Date</h1>
     </div>
   )
 }
  const flightList = () => {
    return filterdDataObject.map((e) => {
      return (
        
        <Card className="Card" key={e.destination}>
          
          <Box sx={{ display: "flex", flexDirection: "column", marginRight: '5%' }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography>
                Destination: {e.city_name.name} - {e.city_name.country_name} 
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Departure Date: {e.depart_date}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Airline: {e.airline}, Provider: {e.gate}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Departure time: {Math.floor(Math.random() * 25)}:00
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Price: {Math.ceil(e.value / 23)}&#8362;
              </Typography>
            </CardContent>
            <Link  to={`/flight/${e.destination}`}>
            <Button
              className="BookButton"
              sx={{
                color: "#d1a769",
                background: "#3F4A5B",
                width: "10em",
                margin: "2%",
                fontWeight: "bold",
              }}
            >
              Book
            </Button>
            </Link>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 350, height: 250, objectFit: "fill"}}
            image={ 'undefined' ? flightFinder : e.image.img }
            alt="gate"
          />
        </Card>
      );
    });
  };

  return (
    <div className="FlightPage">
      { equalName.length > 0 ? flightList(): emptyFlightList()  }
   
    </div>
  );
}

export default Flights;
