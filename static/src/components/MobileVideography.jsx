import React from 'react';
import {Carousel} from 'react-bootstrap';
import ReactPlayer from "react-player";
//import "../css/video.css";

var listOfYoutubeLinks = [
  "https://www.youtube.com/watch?v=lABN5Gld4FQ", 
  "https://www.youtube.com/watch?v=DRaWc9GhYRk"
];

const MobileVideography = () => (

  <Carousel
    interval={null}
    pause={false} 
    controls={false}
    fade={false}
    indicators={true}
    touch={false}  // prevents accidental pausing on mobile devices
    keyboard={false} // prevents accidental pausing on mobile devices
   >
    {listOfYoutubeLinks.map(url_text => 
      <Carousel.Item>
  	    <ReactPlayer
  		    className='react-player'
  		    url={url_text}
  	      controls={true}
  		    width='100%'
  		  />
      </Carousel.Item>
    )}
  </Carousel>
)
export default MobileVideography;