import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "../css/home.css";
import Videography from './Videography';  // without this the photography page will not render properly

var listOfClasses = [
					"home-image1", 
					"home-image2", 
					"home-image3",
					"home-image4", 
					"home-image5",
					"home-image6"
		];

// TODO: this could be converted to a functional component
export default class Home extends Component {

	render() {

	  return (
      <Carousel interval="3000">
        {
          listOfClasses.map(
            (c, index) =>
              <Carousel.Item>
                <img
                  className={c}
                  //src={image}
                  alt=""
                />
              </Carousel.Item>
          )
         }
      </Carousel>
	  )
    }
}