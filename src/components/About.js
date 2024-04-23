import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>Love yourself first in order to be able to love other people</p>
    <img src={image} alt="I made this"/> 
  </div>;
}

export default About;
