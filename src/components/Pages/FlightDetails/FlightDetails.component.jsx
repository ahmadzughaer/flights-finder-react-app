import React, {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormErrors from "../../Parts/FormErrors/FormErrors.component";
import { filterdDataObject } from "../Flights/Flights";
import "./FlightDetails.style.css";
export let name, dateOfBirth, email
function FlightDetails (props) {
  const [className, seClassName] = useState("Hide");
  const [fullName, setFullName] = useState(!!"");
  const [dateOfBirth, setDateOfBirth] = useState(!!"");
  const [email, setEmail] = useState(!!'');

  let navigate = useNavigate();


 const specificFlight = filterdDataObject.filter((details) => {
    return details.destination === props.id.id;
  });

  useEffect(() => {
    flightList()
  },[])

  const getEventTarget = (e) => {
 
    if (e.target.className !== "Submit") {
      seClassName("Hide");
    }
  };


 document.onclick = getEventTarget;

 const setName = (e) => {
  setFullName(e.target.value);
  name = e.target.value
};

const setUserEmail = (e) => {
  setEmail(e.target.value);
  email = e.target.value;
};
const setDoB = (e) => {
  setDateOfBirth(e.target.value);
  dateOfBirth = e.target.value
};

  // handel error message
  const inputsValidation = () => {
    if (fullName === false) {
      seClassName("formErrors");
      return false;
    }
    if (dateOfBirth === false) {
      seClassName("formErrors");
      return false;
    }
    if (email === false) {
      seClassName("formErrors");
      return false;
    }

    return true;
  };

 const onSubmit = () => {
  let checkValidation = true;
  checkValidation = inputsValidation();
  if (checkValidation) {
    navigate("/flight/ticket");
  }
    inputsValidation()
  }
 const flightList = () => {
    return specificFlight.map((e) => {
      return (
        <div className="Container" key={e.destination}>
          <div className="flightDetails">
            <h3>From: Tel-Aviv Yafo - Israel </h3>
            <h3>
              To: {e.city_name.name} - {e.city_name.country_name}
            </h3>
            <h3> Departure Date: {e.depart_date}</h3>
            <h3> Price: {Math.ceil(e.value / 23)}&#8362;</h3>
          </div>
          <div class="center">
            <FormErrors
              ClassName3={className}
              errorMessage={"**You need to fill all the fields**"}
            />
            <form>
              <div class="inputbox">
                <input onChange={setName} type="text" required="required" />
                <span>Full name</span>
              </div>
              <div class="inputbox">
                <input onChange={setDoB} type="date" required="required" />
                <span>Date of birth</span>
              </div>
              <div class="inputbox">
                <input onChange={setUserEmail} type="text" required="required" />
                <span>Email</span>
              </div>
              <div class="inputbox">
                <input className="Submit" onClick={()=>onSubmit()} type="button" value="Purchase now" />
              </div>
            </form>
          </div>
        </div>
      );
    });
  };


    return(
      <div className="List">{flightList()}</div>
    )

}

export default FlightDetails;
