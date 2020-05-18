import React, { Component } from 'react';
import ImageSlide from './ImageSlide';
import Arrow from './Arrow';
import "../css/carousel.css";

var imgUrls = ["../images/1.jpg", "../images/2.jpg"];

export default class Carousel extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  importAll(r) {
    return r.keys().map(r);
  }
  
  componentWillMount() {
    imgUrls = this.importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
  	imgUrls = ["../images/1.jpg", "../images/2.jpg"];
  }

  previousSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === 0;
    const index =  shouldResetIndex ? lastIndex : currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide () {
    const lastIndex = imgUrls.length - 1;
    const { currentImageIndex } = this.state;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index =  shouldResetIndex ? 0 : currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render () {
    return (
      <div className="carousel">
        <Arrow
          direction="left"
          clickFunction={ this.previousSlide }
          glyph="&#9664;" 
        />

        <h3>Hello1</h3>
        <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />
        <h3>Hello3</h3>

        <Arrow
          direction="right"
          clickFunction={ this.nextSlide }
          glyph="&#9654;" 
        />
      </div>
    );
  }
}