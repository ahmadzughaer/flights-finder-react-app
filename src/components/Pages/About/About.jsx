import React from "react";
import myImage from "../../../assets/images/myImg.jpg"

import "./About.style.css";
export let name, dateOfBirth, email;
function About() {
  const aboutMe = () => {
    return (
      <div className="About">
        <h1>Hello All, I'm Ahmad Zughaer</h1>
        <img className="myImage" src={myImage} alt="myImg"/>

        <h2>Why this project?</h2>
        <h3>As a person who is passionate about travel always I wanted to make something that will help me during planning my <br></br>next trip so I hope this small website will be useful at some point</h3>
        <h2>What I want to improve in it?</h2>
        <h3>At this point this website just can search for one-way flights from Tel-Aviv to all destinations<br></br>,so later on I will make it from anywhere to anywhere with more features</h3>
      </div>
    );
  };

  return <div>{aboutMe()}</div>;
}

export default About;
