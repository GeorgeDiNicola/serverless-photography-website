import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "../css/home.css";

const landscapeOrientedImages = [
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

const portraitOrientedImages = [
          require("../brand/branded_black_portrait.jpg"),
          require("../images/wild_life/6_2999_4528.jpg"),
          require("../images/portrait/2_4912_7360.jpg"),
          require("../images/nature/21_4696_7036.jpg"),
          require("../brand/branded_black_portrait.jpg"),
          require("../images/nature/12_2592_3370.jpg"),
          require("../images/nature/10_1367_2048.jpg"),
          require("../images/weddings/1_4912_7360.jpg"),
          require("../images/street/14_1367_2048.jpg"),
];

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 400 });
  }

  render() {

    const isDesktop = this.state.isDesktop;
  
    return(
      <div>
      {isDesktop ? (
      <Carousel interval="6000" pause={false}>
        {landscapeOrientedImages.map((image, index) =>
          <Carousel.Item>
            <img className="carousel-photo"
              src={image}
              alt=""
             />
          </Carousel.Item>
        )}
      </Carousel>
      ) : (
      <Carousel interval="6000" pause={false}>
        {portraitOrientedImages.map((image, index) =>
          <Carousel.Item>
            <img className="carousel-photo"
              src={image}
              alt=""
             />
          </Carousel.Item>
        )}
      </Carousel>
      )}
    </div>
    );
  }
}