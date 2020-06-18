import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from "react-photo-gallery";
import Photo from "./Photo.jsx";
import "../css/photogrid.css";

var listOfImages = [];
var images = [];

const photos = [
  {
    src: 'http://example.com/example/img1.jpg',
    width: 4,
    height: 3
  },
  {
    src: 'http://example.com/example/img2.jpg',
    width: 1,
    height: 1
  }
];

export default class GridGallery extends Component {

  importAll(r) {
    return r.keys().map(r);
  }

  getPhotos() {
  	listOfImages = this.importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));

    // create an object from the imported listOfImages
    images = listOfImages.map(x => ({src: x, width: 4, height: 3}));
    //this.shuffleList(images);
    
  }

  shuffleList(array) {
    array.sort(function(a, b) {
      return 0.5 - Math.random()
    });
  }

  render(){

	this.getPhotos();

    return(
      <div className="gridContainer">
      <Gallery 
        photos={images} 
        direction={"column"} 
      />
      </div>
    );
  }

 }