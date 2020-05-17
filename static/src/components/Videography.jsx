import React, { Component } from 'react';
import ReactPlayer from "react-player";
import "../css/video.css";

export default class Videography extends Component {

	constructor(props) {
		super(props);
		this.state = {
			video_urls: ["https://www.youtube.com/watch?v=DRaWc9GhYRk", "https://www.youtube.com/watch?v=lABN5Gld4FQ"]
		}
	}

	render() {
		return (
		  <React.Fragment>
		  <h1>Professional Video Reels</h1>
		  <div className="video-page">
		    {this.state.video_urls.map(url_text => 
		    <div className='player-wrapper'>
		    <ReactPlayer
		      className='react-player'
		      url={url_text}
		      width='100%'
		      height='100%'
		      controls={true}
		    />
		    </div>
		    )}
		  </div>
		  </React.Fragment>
		)
	}
}