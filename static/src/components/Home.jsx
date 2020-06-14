import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "../css/home.css";
import Videography from './Videography';  // without this the photography page will not render properly

var listOfImages = [
					"logo-black",
          "home-image1",
					"home-image2",
          "logo-black",
					"home-image3",
					"home-image4",
          "logo-black",
					"home-image5",
					"home-image6",
          "logo-black",
          "home-image7",
          "home-image8"
];

const Home = () => (
  
  <Carousel interval="2500" pause={false}>
    {listOfImages.map((c, index) =>
      <Carousel.Item>
        <img
          className={c}
          //src={image}
          alt=""
         />
      </Carousel.Item>
    )}
  </Carousel>
)
export default Home;