import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Photo from './Photo';
import "react-image-gallery/styles/css/image-gallery.css";

var listOfImages = [];
var images = [];

export default class Photography extends Component {

  constructor(props) {
    super(props);
  }

  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    // import the list
    listOfImages = this.importAll(require.context('../images/nature/', false, /\.(png|jpe?g|svg)$/));
    // create a objects from the imported listOfImages
    images = listOfImages.map(x => ({original: x, thumbnail: x}));
  }

  render(){

      return(
        <div>
          <ImageGallery 
            items={images} 
            showBullets={true}
            showIndex={true}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={false}
          />
        </div>
      )
    }
}