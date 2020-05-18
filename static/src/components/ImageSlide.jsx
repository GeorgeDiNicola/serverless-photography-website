import React, { Component } from 'react';
import "../css/carousel.css";
import "../images/1.jpg";

const ImageSlide = ({ url }) => {
  console.log(url);

  const styles = {
    backgroundImage: 'url(' + '../images/1.jpg' + ')',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  require("../images/1.jpg")

  return (
    <React.Fragment>
      <div className="image-slide" style={styles}>
      </div>
      <h3>Hello2</h3>
    </React.Fragment>
  );
};

export default ImageSlide;