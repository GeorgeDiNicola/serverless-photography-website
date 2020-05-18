import React, { Component } from 'react';
import Carousel from './Carousel.jsx';
import "../css/carousel.css";

export default class Home extends Component {

	render() {

	  return (
	    <div id="container">
	      <Carousel />
        </div>   
	  )
    }
}