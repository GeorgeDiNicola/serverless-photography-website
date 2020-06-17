import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../css/photography.css";

var listOfImages = [];
var images = [];

export default class Photography extends Component {

  constructor(props) {
    super(props);
    this.filterPhotos = this.filterPhotos.bind(this);
    this.shuffleList = this.shuffleList.bind(this);
  }

  importAll(r) {
    return r.keys().map(r);
  }

  shuffleList(array) {
    array.sort(function(a, b) {
      return 0.5 - Math.random()
    });
  }

  filterPhotos(photoCategory) {
    // import the list based on what the user chose in the drop-down
    if (photoCategory.includes("events")) {
      listOfImages = this.importAll(require.context('../images/events/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("nature")) {
      listOfImages = this.importAll(require.context('../images/nature/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("portrait")) {
      listOfImages = this.importAll(require.context('../images/portrait/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("still_life")) {
      listOfImages = this.importAll(require.context('../images/still_life/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("street")) {
      listOfImages = this.importAll(require.context('../images/street/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("themed")) {
      listOfImages = this.importAll(require.context('../images/themed/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("weddings")) {
      listOfImages = this.importAll(require.context('../images/weddings/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("wild_life")) {
      listOfImages = this.importAll(require.context('../images/wild_life/', false, /\.(png|jpe?g|svg)$/));
    }
    // use all images
    else {
      listOfImages = this.importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
    }
    
    // create an object from the imported listOfImages
    images = listOfImages.map(x => ({original: x, thumbnail: x}));

    // randomize the list of images when the user chooses to view "all" photos
    if (photoCategory.includes("all")) {
      this.shuffleList(images);
      /*this.setState({
        showBullets: false
      });*/
    }
  }

  render(){

      var currentWindow = window.location.href;
      this.filterPhotos(currentWindow);

      return(
        <ImageGallery class="no-outline"
            items={images} 
            showBullets={false}
            showIndex={false}
            showThumbnails={true}
            lazyLoad={true}
            PlayButton={true}
        />
      );
    }
}