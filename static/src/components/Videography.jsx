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

	render() {
		return (
		  <div className="player-wrapper">
		    {/* for arrows in video, use div className="center" here */}
		    <Carousel className="center" interval="1000000">
		      {this.state.video_urls.map(url_text => 
		        <Carousel.Item>
		          <ReactPlayer
		            className='react-player'
		            url={url_text}
		            controls={true}
		          />
		        </Carousel.Item>
		      )}
		    </Carousel>
		  </div>
		)
	}
}