import React from 'react';
import '../css/about.css';

const About = () => (
  
  <div className="main-container w3-animate-bottom">
      <img 
        className="portrait-image"
        src={require("../brand/billy.png")}
      ></img>
      <div className="about-text">Billy Denham
      </div>
    <div className="right-aligned-text">
      is an experienced photographer, videographer, and editor in the marketing and advertising industry. Billy is currently a Content Creator at Milk Street Marketing, where he oversees, edits, recommends, and reviews video projects to deliver superior content to achieve clients’ expectations. His skillset includes photography, videography, video editing, film production, screenwriting, and lighting design.
      <br/>
      <br/>
      <b>Temple University Graduate:</b> 
      <br/>
      BA - Cinematography and Film/Video Production
    </div>
  </div>

)
export default About;