import React, { Component, useState, useCallback } from 'react';	
import { render } from 'react-dom';	
import Gallery from 'react-photo-gallery';

var listOfImages = [];	
var images = [];	

export default class GridGallery extends Component {	

  constructor(props) {
    super(props);
    //this.getPhotos = this.getPhotos.bind(this);
  }

  getMeta(src){
    var res = src.split(".");
    var res2 = res[0].split("_");
    var width = res2[1];
    var height = res2[2];
    var metaData = {src: src, width: width, height: height};
    return metaData;
  }

   importAll(r) {	
    return r.keys().map(r);	
  }	

  componentDidMount() {
    //getPhotos() {
    listOfImages = this.importAll(require.context('../images/dimPhotos/', true, /\.(png|jpe?g|svg)$/));
    var index;
    for (index = 0; index < listOfImages.length; ++index) {
       var meta = this.getMeta(listOfImages[index]);
       images.push(meta);
    };
    console.log(images);

    // create an object from the imported listOfImages
    //images = listOfImages.map(x => ({src: x, thumbnail: x, width: 4, height: 3}));
    this.shuffleList(images);
  }

  shuffleList(array) {	
    array.sort(function(a, b) {	
      return 0.5 - Math.random()	
    });	
  }

  render(){

    this.importAll(require.context('../images/street/', false, /\.(png|jpe?g|svg)$/));

    return(	
      //{this.getPhotos}
      <React.Fragment>
      <Gallery 
        photos={images} 
        direction={"column"}
      />
      </React.Fragment>
    );	
  }	

 } 