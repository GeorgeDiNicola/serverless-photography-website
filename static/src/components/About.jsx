import React from 'react';
import '../css/about.css';

const About = () => (
  
  <div className="main-container w3-animate-bottom">
      <img 
        className="portrait-image"
        alt=""
        src={require("../brand/billy.png")}
      ></img>
      <div className="about-text">Billy Denham
      </div>
    <div className="right-aligned-text">
      An experienced photographer, videographer, and editor in the marketing and advertising industry with a Bachelor of Arts in Cinematography and Film/Video Production from Temple University. 
      Billy’s skillset includes film production, drone piloting, screenwriting, and lighting design. 
      Currently, Billy works as a Content Creator at Milk Street Marketing in Philadelphia where he recommends, oversees, edits, and reviews video projects to deliver superior content, consistently achieving clients’ expectations.
    </div>
  </div>

)
export default About;