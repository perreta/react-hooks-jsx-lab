import React from "react";
import { image } from "../data/data";

function About() {
  return <div>About
    <div id="about">
      <h2>About Me</h2>
      <p>What's Up</p>
      <img src={image} alt="I made this"></img>
    </div>
  </div>;
}

export default About;
