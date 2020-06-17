import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';

var listOfImages = [];
var images = [];

const IMAGES_old =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

export default class PhotoGrid extends Component {

  importAll(r) {
    return r.keys().map(r);
  }

  getPhotos() {
  	listOfImages = this.importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
    // create an object from the imported listOfImages
    images = listOfImages.map(x => ({src: x, thumbnail: x}));
  }

  render(){

	this.getPhotos();

    return(
      <Gallery images={images}/>
    );
  }
  
 }
