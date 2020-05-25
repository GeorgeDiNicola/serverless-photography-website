import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Videography from './Videography';
import Contact from './Contact';
import "../css/home.css";

var listOfClasses = [
					"home-image1", 
					"home-image2", 
					"home-image3", 
					"home-image4", 
					"home-image5",
					"home-image6"
					];

export default class Home extends Component {

	render() {

	  return (
	  	  <React.Fragment>
        <section id="home" class="section">
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
        </section>
        <section id="videography" class="section">
          <Videography>
          </Videography>
        </section>
        <section id="contact" class="section">
          <Contact>
          </Contact>
        </section>
        </React.Fragment>
	  )
    }
}