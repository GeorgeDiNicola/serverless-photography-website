import React, { Component } from 'react';

export default class Photography extends Component {

	state = {
    	// each path to the photos stored in the array
    	photos: [
    		'./images/1.jpg',
    		'./images/2.jpg'
    	]
  	};

	render() {
		return (
		  <img src={require('../images/1.jpg')} width="500" alt="Logo" />
		);
	}
}