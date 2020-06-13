import React, { Component } from 'react';
import ReactPlayer from "react-player";
import "react-bootstrap";
import "../css/video.css";

export default class Videography extends Component {

	constructor(props) {
		super(props);
		this.state = {
			video_urls: ["https://www.youtube.com/watch?v=lABN5Gld4FQ", "https://www.youtube.com/watch?v=DRaWc9GhYRk"]
		}
	}

	render() {
		return (
		  <React.Fragment>
		  <div className="parentContainer">
		    <div class="container">
		      {this.state.video_urls.map(url_text => 
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
	      <svg 
		      class="bi bi-arrow-down-circle-fill align-top center" 
		      width="3.5em" height="3.5em" 
		      viewBox="0 0 24 24" 
		      fill="currentColor" 
		      xmlns="http://www.w3.org/2000/svg">
              <path 
                fill-rule="evenodd" 
                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 5a.5.5 0 0 0-1 0v4.793L5.354 7.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 9.793V5z"
              />
			</svg>
	      
		  </React.Fragment>
		)
	}
}