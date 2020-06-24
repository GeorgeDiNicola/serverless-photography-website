import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "../css/home.css";
import Videography from './Videography';  // without this the photography page will not render properly

var listOfImages = [
          require("../brand/branded_black.jpg"),
          require("../images/wild_life/3_2905_1939.jpg"),
          require("../images/nature/25_2048_904.jpg"),
          require("../images/wild_life/2_4777_3164.jpg"),
          require("../images/street/2_2048_1367.jpg"),
          require("../images/nature/3_4257_2820.jpg"),
          require("../images/nature/14_4185_2772.jpg"),
          require("../images/wild_life/1_3872_2592.jpg"),
          require("../images/street/6_2048_1367.jpg"),
];

const Home = () => (
  
  <Carousel interval="6000" pause={false}>
    {listOfImages.map((image, index) =>
      <Carousel.Item>
        <img className="carousel-photo"
          //className={c}
          src={image}
          alt=""
         />
      </Carousel.Item>
    )}
  </Carousel>
)
export default Home;