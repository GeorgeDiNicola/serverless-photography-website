import React, { Component } from 'react';
import ReactPlayer from "react-player";
import "../css/video.css";

var listOfYoutubeLinks = [
  "https://www.youtube.com/watch?v=lABN5Gld4FQ", 
  "https://www.youtube.com/watch?v=DRaWc9GhYRk"
];

const Videography = () => (
  <div className="parentContainer">
    <div class="container">
	  {listOfYoutubeLinks.map(url_text => 
	    <div className="player-wrapper">
		  <ReactPlayer
		    className='react-player'
		    url={url_text}
		    controls={true}
		    width='100%'
	        height='100%'
		  />
		</div>
	  )}
	</div>
  </div>
)
export default Videography;