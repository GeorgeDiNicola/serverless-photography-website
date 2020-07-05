import React from 'react';
import '../css/about.css';

const About = () => (
  
  <div className="main-container w3-animate-bottom">
    <div className="left-aligned-image">
      <img 
        className="portrait-image"
        src={require("../brand/billy.png")}
      ></img>
      <div className="about-text">Billy Denham
      </div>
    <div className="right-aligned-text">
      is an experienced content creator in the marketing and advertising industry. Skilled in photography, film production, as well as Adobe Lightroom, After Effects, and Premiere Pro. Strong media and communication professional with a Bachelor of Arts - BA focused in Directing and Film/Video Production from Temple University. 
    </div>
    </div>
  </div>

)
export default About;