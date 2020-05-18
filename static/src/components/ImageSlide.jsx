import React, { Component } from 'react';
import "../css/carousel.css";

const ImageSlide = ({ url }) => {
  console.log(url);

  const styles = {
    backgroundImage: `url(${url})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div className="image-slide" style={styles}></div>
  );
};
export default ImageSlide;