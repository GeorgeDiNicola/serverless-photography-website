import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "../css/home.css";

const homeImages = [
          require("../brand/branded_black.jpg"),
          require("../images/wild_life/3_2905_1939.jpg"),
          require("../images/nature/9_2048_1367.jpg"),
          require("../images/wild_life/2_4777_3164.jpg"),
          require("../images/street/2_2048_1367.jpg"),
          require("../brand/branded_black.jpg"),
          require("../images/nature/3_4257_2820.jpg"),
          require("../images/nature/14_4185_2772.jpg"),
          require("../images/wild_life/1_3872_2592.jpg"),
          require("../images/street/6_2048_1367.jpg"),
];

const Home = () => (
  
  <Carousel interval="5500" pause={false}>
    {homeImages.map((image, index) =>
      <Carousel.Item>
        <img 
          className="carousel-photo"
          src={image}
          alt=""
        />
      </Carousel.Item>
    )}
  </Carousel>
)
export default Home;