import React from 'react';
import '../css/about.css';

const About = () => (
  
  <div className="main-container w3-animate-bottom">
      <div className="mobile-about-text">Billy Denham
      </div>
    <div className="center-aligned-text">
      is an experienced photographer, videographer, and editor in the marketing and advertising industry.
      As a Content Creator at Milk Street Marketing, Billy oversees, edits, recommends, and reviews video projects to deliver superior content, consistently achieving clients’ expectations.
      Along with a BA in Cinematography and Film/Video Production from Temple University, Billy's skillset includes photography, videography, video editing, film production, drone piloting, screenwriting, and lighting design.
    </div>
    <img 
        className="mobile-portrait-image"
        src={require("../brand/billy.png")}
      ></img>
  </div>

)
export default About;