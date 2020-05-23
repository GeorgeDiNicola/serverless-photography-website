import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "../css/home.css"

var listOfImages = [];

export default class Home extends Component {

	importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../carousel_images/', false, /\.(png|jpe?g|svg)$/));
    }

	render() {

	  return (
	  	<div>
	  	  <Carousel interval="3000">
          {
            listOfImages.map(
              (image, index) =>
                  <Carousel.Item>
                    <img
                      className="home-image"
                      src={image}
                      alt=""
                    />
                  </Carousel.Item>
              )
            }
            </Carousel>
          </div> 
	  )
    }
}