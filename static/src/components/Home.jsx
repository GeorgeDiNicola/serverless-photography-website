import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "../css/home.css";
import Videography from './Videography';  // without this the photography page will not render properly

var listOfClasses = [
					"logo-black",
          "home-image1",
					"home-image2",
          "logo-black",
					"home-image3",
					"home-image4",
          "logo-black",
					"home-image5",
					"home-image6",
		];

// TODO: this could be converted to a functional component
export default class Home extends Component {

	render() {

	  // have to logo alternate between each photo
    return (
      <Carousel interval="2000" pause={false}>
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