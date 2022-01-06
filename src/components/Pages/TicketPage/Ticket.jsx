import React, { useState } from "react";
import "./Ticket.style.css";
import {name, email} from '../FlightDetails/FlightDetails.component'
function Ticket () {
    const [className, setClass] = useState("Hide");
    console.log('my email',name)

    const onClick = () => {
        setClass('HiddenText')
    }
 const TicketDetails = () => {
  return (
      <div className="Ticket">
          <div className="text">
            <h1>Hello {name}</h1>
            <h2>Your flight ticket will be sent to your email: {email}</h2>
            <h3>Would you like to book a stay?</h3>
            <input onClick={()=> onClick() } className="SubmitBtn" type={'button'} value={'Yes'}/>
            <h3 className={className}>Maybe in the next project 😁 </h3>
            </div>
      </div>
  )
  };


    return(
      <div className="List">    
      {TicketDetails()}
      </div>
    )

}

export default Ticket;
