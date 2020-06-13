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
		  </React.Fragment>
		)
	}
}