import React from 'react';
import '../css/about.css';

const About = () => (
  
  <div className="main-container">
    <div className="left-aligned-image">
      <img 
        className="portrait-image"
        src={require("../brand/portrait2.jpg")}
        height={800}
      ></img>
    <div className="right-aligned-text">
      Billy Denham is an experienced Content Creator with a demonstrated history of working in the marketing and advertising industry. Skilled in Photography, Film Production, Lightroom, After Effects, and Adobe Premiere Pro. Strong media and communication professional with a Bachelor of Arts - BA focused in Directing and Film/Video Production from Temple University. 
    </div>
    </div>
  </div>

)
export default About;