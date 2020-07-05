import React from 'react';
import '../css/about.css';

const About = () => (
  
  <div className="main-container w3-animate-bottom">
    <div className="left-aligned-image">
      <img 
        className="portrait-image"
        src={require("../brand/billy.jpg")}
      ></img>
      <div className="about-text">Billy Denham
      </div>
    <div className="right-aligned-text">
      is an experienced content creator with a demonstrated history of working in the marketing and advertising industry. Skilled in Photography, Film Production, Lightroom, After Effects, and Adobe Premiere Pro. Strong media and communication professional with a Bachelor of Arts - BA focused in Directing and Film/Video Production from Temple University. 
    </div>
    </div>
  </div>

)
export default About;