import React, { Component, useState, useCallback } from 'react';	
import { render } from 'react-dom';	
import Gallery from 'react-photo-gallery';


var listOfImages = [];	
var images = [];	


export default class GridGallery extends Component {	

  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
      currentPhoto: "",
    };
    this.handleClickPhoto= this.handleClickPhoto.bind(this);
  }

  getMeta(src){
    var res = src.split(".");
    var res2 = res[0].split("_");
    var width = res2[1];
    var height = res2[2];
    // create an object from the imported listOfImages
    var metaData = {src: src, width: width, height: height};
    return metaData;
  }

  importAll(r) {	
    return r.keys().map(r);	
  }	

  componentDidMount() {
    //getPhotos() {
    listOfImages = this.importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
    var index;
    for (index = 0; index < listOfImages.length; ++index) {
       var meta = this.getMeta(listOfImages[index]);
       images.push(meta);
    };
    this.shuffleList(images);
  }

  shuffleList(array) {	
    array.sort(function(a, b) {	
      return 0.5 - Math.random()	
    });	
  }

  handleClickPhoto(event, photo) {
    console.log(photo.previous);
    console.log(photo.photo.src);
    console.log(photo.index);
    console.log(photo.next);
    this.setState({ isOpen: true });
    this.setState({ currentPhoto: photo.photo.src });
  }

  render(){

    const { photoIndex, isOpen } = this.state;

    return(
        <Gallery 
          photos={images} 
          direction={"column"}
          onClick={this.handleClickPhoto}
        />
    );	
  }	

 } 