import React, { Component } from 'react';
import ReactPlayer from "react-player";
import {Carousel} from 'react-bootstrap';
import "../css/video.css";

export default class Videography extends Component {

	constructor(props) {
		super(props);
		this.state = {
			video_urls: ["https://www.youtube.com/watch?v=DRaWc9GhYRk", "https://www.youtube.com/watch?v=lABN5Gld4FQ"]
		}
	}

	//TODO: implement scroll padding so the videos can snap in
	render() {
		return (
		  <React.Fragment>
		  <div>
		  {/*
		      {this.state.video_urls.map(url_text => 
		        <div className="player-wrapper">
		          <ReactPlayer
		            className='react-player'
		            url={url_text}
		            controls={true}
		          />
		        </div>
		      )}
			*/}
		  <div className="player-wrapper-top">
		  <ReactPlayer
		    className='react-player'
		     url={this.state.video_urls[0]}
		     controls={true}
		  />
		  </div>
		  <div className="player-wrapper-bottom">
		  <ReactPlayer
		    className='react-player'
		     url={this.state.video_urls[1]}
		     controls={true}
		  />
		  </div>
		  </div>

		  </React.Fragment>
		)

	}
}