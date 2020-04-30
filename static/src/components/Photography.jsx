import React, { Component } from 'react';
import Image from './Image';

export default class Photography extends Component {

	constructor(props) {
      super(props);  // you must also pass props to the constructor of the base class.
      this.fillPhotosArray = this.fillPhotosArray.bind(this);

      this.state = {
      	photos: [
      		'../images/1.jpg',
      		'../images/2.jpg'
      	]
      }
    
    };

	fillPhotosArray() {
	  var photos = [];
	  for(var i=0; i<39; i++){
        var path ='../images/' + i + '.jpg';
        photos.push(path);
      };

      this.setState({ photos });
      console.log('made it here');
	};

	render() {
		require('../images/');
		return (
		  <div>
		    {this.state.photos.map(imagePath =>
              <Image
                imagePath={imagePath}
              />
		    )}
		  </div>
		)
	}
}