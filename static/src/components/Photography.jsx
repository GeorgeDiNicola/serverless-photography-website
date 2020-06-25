import React, { Component } from 'react'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../css/photography.css";


var images = [];


export default class Photography extends Component {

  constructor(props) {
    super(props);
    this.filterPhotos = this.filterPhotos.bind(this);
  }

  importAll(r) {
    return r.keys().map(r);
  }

  filterPhotos(photoCategory) {
    // import the list based on what the user chose in the drop-down
    if (photoCategory.includes("events")) {
      images = this.importAll(require.context('../images/events/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("nature")) {
      images = this.importAll(require.context('../images/nature/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("portrait")) {
      images = this.importAll(require.context('../images/portrait/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("still_life")) {
      images = this.importAll(require.context('../images/still_life/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("street")) {
      images = this.importAll(require.context('../images/street/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("themed")) {
      images = this.importAll(require.context('../images/themed/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("weddings")) {
      images = this.importAll(require.context('../images/weddings/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("wild_life")) {
      images = this.importAll(require.context('../images/wild_life/', false, /\.(png|jpe?g|svg)$/));
    }
    
    // create an object from the imported listOfImages
    images = images.map(x => ({original: x, thumbnail: x}));
  }

  render() {

      var currentWindow = window.location.href;
      this.filterPhotos(currentWindow);

      return(
          <ImageGallery 
            items={images} 
            showBullets={false}
            showIndex={false}
            lazyLoad={true}
            PlayButton={true}
            showThumbnails={true}
            thumbnailPosition="bottom"
          />
      );
  }
}