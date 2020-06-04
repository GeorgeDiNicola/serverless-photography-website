import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Photo from './Photo';
import "react-image-gallery/styles/css/image-gallery.css";

var listOfImages = [];

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  ];

export default class Photography extends Component {

  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
  }

  render(){

      return(
        <div className="screen">
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