import React from "react";
import Links from "./Links";

function About(props) {
  const linkedin = props.links.linkedin
  const github = props.links.github
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={github} linkedin={linkedin}/>
    </div>
  );
}

export default About;
