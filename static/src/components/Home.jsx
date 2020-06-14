import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import "../css/home.css";
import Videography from './Videography';  // without this the photography page will not render properly

import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../css/loaders.css";

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
          "logo-black",
          "home-image7",
          "home-image8"
		];

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      component: null,
    };
  }

  componentDidMount() {
    // set the component state asynchronously
    setTimeout(() => {
      this.setState({
        component: <Carousel interval="2000" pause={false}>
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
      });
    });  // ,5000); to show the spinner
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