import React, { Component } from 'react';
import ReactPlayer from "react-player";
import "react-bootstrap";
import "../css/video.css";
import "../css/loaders.css";

import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../css/loaders.css";

export default class Videography extends Component {

	constructor(props) {
		super(props);
		this.state = {
			video_urls: ["https://www.youtube.com/watch?v=lABN5Gld4FQ", "https://www.youtube.com/watch?v=DRaWc9GhYRk"],
			component: null,
		}
	}

	componentDidMount() {
	  // set the component state asynchronously
	  setTimeout(() => {
	    this.setState({
	      component: 
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
          });
	    }, 2000);  // ,5000); to show the spinner
	  }

	render() {
		return (
		  this.state.component || (
		  <div className="loader">
            <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
          </div>
          )
		)

	}
}