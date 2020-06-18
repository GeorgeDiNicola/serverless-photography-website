import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import "../css/photogrid.css";


var listOfImages = [];
var images = [];

export default class PhotoGrid extends Component {

  importAll(r) {
    return r.keys().map(r);
  }

  getPhotos() {
  	listOfImages = this.importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
    // create an object from the imported listOfImages
    images = listOfImages.map(x => ({src: x, thumbnail: x, width: 4, height: 3}));
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
        images={images}
        showLightboxThumbnails={true}
        backdropClosesModal={true}
        margin={4}
        direction={"column"}
      />
      </div>
    );
  }

 }
