import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import Photo from './Photo.jsx';
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
   }

  importAll(r) {
    return r.keys().map(r);
  }

  getPhotos() {
  	listOfImages = this.importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
    var index;
    for (index = 0; index < listOfImages.length; ++index) {
       this.getMeta(listOfImages[index]);
       console.log(listOfImages[index]);
    };

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

	{images.map(src => 
		  	<Photo 
		  	  counter={src}
		  	/>
		  )}

    return(
      <div className="gridContainer">
      <Gallery 
        images={images}
        showLightboxThumbnails={true}
        backdropClosesModal={true}
        margin={7}
      />
      </div>
    );
  }
}