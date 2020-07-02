import React from 'react';
import {Carousel} from 'react-bootstrap';
import "../css/home.css";

const homeImages = [
          require("../brand/branded_black_portrait.jpg"),
          require("../images/street/14_1367_2048.jpg"),
          require("../brand/branded_black_portrait.jpg"),
          require("../images/nature/10_1367_2048.jpg"),
          require("../brand/branded_black_portrait.jpg"),
          require("../images/events/5_1367_2048.jpg"),
          require("../brand/branded_black_portrait.jpg"),
          require("../images/still_life/10_2686_4055.jpg"),
];

const MobileHome = () => (
  
  <Carousel
    interval="2500" 
    pause={false} 
    controls={false}
    fade={true}
    indicators={false}
    touch={false}  // prevents accidental pausing on mobile devices
    keyboard={false} // prevents accidental pausing on mobile devices
   >
    {homeImages.map((image, index) =>
      <Carousel.Item>
        <img 
          className="mobile-carousel-photo"
          src={image}
          alt=""
        />
      </Carousel.Item>
    )}
  </Carousel>

)
export default MobileHome;