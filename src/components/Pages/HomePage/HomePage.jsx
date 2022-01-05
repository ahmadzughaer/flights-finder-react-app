import React, { useEffect, useState } from "react";
import axios from "axios";
import BookingForm from "../../Parts/BookingForm/BookingForm.comonent";
import FormErrors from "../../Parts/FormErrors/FormErrors.component";
import Api from "../../../Api/api";
import "./HomePage.style.css";
import "../../Parts/FormErrors/FormErrors.style.css";
import { useNavigate } from "react-router-dom";
export let filterdFlightArray = [],
  myApi,
  data,
  destinationCity;

function HomePage() {
  const [destination, setDestination] = useState([]);
  const [allFlights, setFlights] = useState([]);
  const [className, setClass] = useState("List");
  const [className2, setClass2] = useState("Hide");
  const [className3, setClass3] = useState("Hide");
  const [searchValue, setSearchValue] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(false);
  const [ticketOption, setTicketOption] = useState();
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  // const [isChecked, setIsChecked] = useState(false);
  const defualt = "Tel Aviv-Yafo";
  let navigate = useNavigate();

  useEffect(() => {
    async function getFlight() {
      myApi = axios.create({
        baseURL: `https://map.aviasales.ru/prices.json?origin_iata=TLV&one_way=${selectedRadio}`,
      });
      try {
        const flights = await myApi.get("");
        setFlights(flights.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
    getFlight();
  }, );

  // fetch all the data from Api
  async function fetchData() {
    try {
      data = await Api.get("");
      setDestination(data.data.directions);
    } catch (err) {
      console.log(err);
    }
  }



  // enable return date when choose round trip
  const HandleChangeValue1 = () => {
    setSelectedRadio(false);
    setTicketOption("round trip");
  };

  // disable return date when choose one way trip
  const HandleChangeValue2 = () => {
    setSelectedRadio(true);
    setTicketOption("one way");
  };

  // get all airport cities
  const getAllDestinations = () => {
    return destinationValue(searchValue).map((el) => {
      return (
        <p className={className2} key={el.iata}>
          {el.name}
        </p>
      );
    });
  };

  // display all cities option on focus
  const onInputFocus = () => {
    setClass("Display");
    setClass2("AllDestinations");
  };

  // set searh value
  const onChangeHandler = (e) => {
    setSearchValue(e.target.value);
  };

  // filter cities list based on search input
  const destinationValue = (searchValue) => {
    return destination.filter((el) => {
      const filteredDestinations = el.name.toLowerCase();
      return filteredDestinations.indexOf(searchValue.toLowerCase()) !== -1;
    });
  };

  const filterFlights = () => {
    filterdFlightArray = allFlights.filter((el) => {
      return el.depart_date === departureDate;
    });
  };

  filterFlights();
  // on click make input value = selected city
  const selectDestination = (e) => {
    setSearchValue(e.target.innerText);
    destinationCity = e.target.innerText;
    setClass("Hide");
  };

  // to handle multiple on click events
  const onClickEvents = (e) => {
    selectDestination(e);
    getEventTarget(e);
  };

  // to handle on click out side list to close it
  const getEventTarget = (e) => {
    if (e.target.className !== "destinationInput") {
      setClass("Hide");
    }

    if (e.target.className !== "Submit") {
      setClass3("Hide");
    }
  };

  document.onclick = getEventTarget;

  // set departure date value
  const setTripDate1 = (e) => {
    setDepartureDate(e.target.value);
  };

  // set return date value
  const setTripDate2 = (e) => {
    setReturnDate(e.target.value);
  };
  // validation
  const inputsValidation = () => {
    if (searchValue === "") {
      setClass3("formErrors");
      return false;
    }
    if (departureDate === "") {
      setClass3("formErrors");
      return false;
    }
    if (returnDate === "" && selectedRadio === false) {
      setClass3("formErrors");
      return false;
    }

    return true;
  };

  // toggele to
  // const handleCheckedChange = (e) => {
  //   setIsChecked((prevCheckedValue) => !prevCheckedValue);
  // };

  // on submit first check the validation then redirect to flight page
  const onSubmit = () => {
    let checkValidation = true;
    checkValidation = inputsValidation();
    if (checkValidation) {
      navigate("/flight");
    }
  };
  return (
    <div className="HomePage">
      <div className="Container">
        <div className="Background">
          <div className="InputWrapper">
            <FormErrors
              ClassName3={className3}
              errorMessage={"**You need to fill all the options**"}
            />

            <BookingForm
              onFocus={onInputFocus}
              onChange={onChangeHandler}
              value={searchValue}
              ClassName={"destinationInput"}
              onClick={onSubmit}
              tripOptionValue1={ticketOption}
              onClickOption1={HandleChangeValue1}
              tripOptionValue2={ticketOption}
              onClickOption2={HandleChangeValue2}
              activeOrNot={selectedRadio}
              defaultValue={defualt}
              departureDate={departureDate}
              returnDate={returnDate}
              onChangeDate1={setTripDate1}
              onChangeDate2={setTripDate2}
              // onChangeOption1={handleCheckedChange}
              // onChangeOption2={handleCheckedChange}
            />

            <div className={className} onClick={onClickEvents}>
              {getAllDestinations()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
