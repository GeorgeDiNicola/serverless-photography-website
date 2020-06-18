import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import "../css/photogrid.css";


var listOfImages = [];
var images = [];


export default class PhotoGrid extends Component {

  getMeta(url){   
    var img = new Image();
    img.onload = function(){
       console.log(this.width+' '+ this.height);
    };
    img.src = url;
    var metaData = {src: url, thumbnail: url, width: this.width, height: this.height};
    return metaData;
   }

  importAll(r) {
    return r.keys().map(r);
  }

  getPhotos() {
  	listOfImages = this.importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
    var index;
    for (index = 0; index < listOfImages.length; ++index) {
       var meta = this.getMeta(listOfImages[index]);
       images.push(meta);
    };

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

	this.getPhotos();

    return(
      <div className="gridContainer">
      <Gallery 
        images={images}
        showLightboxThumbnails={true}
        backdropClosesModal={true}
        margin={5}
      />
      </div>
    );
  }
}