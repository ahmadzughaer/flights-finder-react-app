import React from "react";
import "./BookingForm.style.css";


function BookingForm(props) {
  return (
    <div className="BookingForm">
      <form>
        <div className="Options">
          <label>Round Trip</label>
          <input
            type={"radio"}
            name="RadioBtn"
            value={props.tripOptionValue1}
            onClick={props.onClickOption1}
            onChange={props.onChangeOption1}
          />
          <label>One Way</label>
          <input
            type={"radio"}
            name="RadioBtn"
            value={props.tripOptionValue2}
            onClick={props.onClickOption2}
            onChange={props.onChangeOption2}
          />
        </div>
        <div className="Destination">
          <label>From</label>
          <input type={"text"} defaultValue={props.defaultValue} size="10" />
          <label>To</label>
          <input
            onFocus={props.onFocus}
            onBlur={props.onBlur}
            type={"text"}
            value={props.value}
            onChange={props.onChange}
            className={props.ClassName}
            size="10"
          />
          <label>Departure</label>
          <input
            type={"date"}
            value={props.departureDate}
            onChange={props.onChangeDate1}
          />
          <label>Return</label>
          <input
            id="oneWay"
            type={"date"}
            disabled={props.activeOrNot}
            value={props.returnDate}
            onChange={props.onChangeDate2}
          />
        </div>
       
          <button
            className="Submit"
            name="Search Flight"
            type="button"
            onClick={props.onClick}
          >
            Search Flight<i className="fas fa-plane"></i>
          </button>

      </form>
    </div>
  );
}

export default BookingForm;
