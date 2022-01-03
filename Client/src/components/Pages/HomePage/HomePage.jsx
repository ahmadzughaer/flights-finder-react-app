import React, { useEffect, useState } from "react";
import BookingForm from "../../Parts/BookingForm/BookingForm.comonent";
import Header from "../../Parts/Header/Header.component";
import Api from "../../../Api/api";
import "./HomePage.style.css";

function HomePage() {
  const [destination, setDestination] = useState([]);
  const [className, setClass] = useState("List");
  const [className2, setClass2] = useState("Hide");
  const [searchValue, setSearchValue] = useState("");
  const [selectedRadio, setSelectedRadio] = useState(false);
  const [ticketOption, setTicketOption] = useState(null);
  const [departureDate, setDepartureDate] = useState();
  const [returnDate, setReturnDate] = useState();
  const defualt = "Tel Aviv-Yafo";

  useEffect(() => {
    fetchData();
  }, []);

  // fetch all the data from Api
  async function fetchData() {
    try {
      const data = await Api.get("");
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

  // on click make input value = selected city
  const selectDestination = (e) => {
    setSearchValue(e.target.innerText);
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
  };

  document.onclick = getEventTarget;

  // set departure date value
  const setTripDate1 = (e) => {
    setDepartureDate(e.target.value)
  }

    // set return date value
  const setTripDate2 = (e) => {
    setReturnDate(e.target.value)
  }

  // test 
  const onSubmit = () => {
    alert(
      `you want to travel ${ticketOption} from ${defualt} to ${searchValue} on ${departureDate} till ${returnDate}`
    );
  };
  return (
    <div className="HomePage">
      <Header />
      <div className="Container">
        <div className="Background">
          <div className="InputWrapper">
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
