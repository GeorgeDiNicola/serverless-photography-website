import React, { Component } from 'react';
import Photo from './Photo';

var listOfImages =[];

export default class Photography extends Component {

	importAll(r) {
        return r.keys().map(r);
    }
    componentWillMount() {
        listOfImages = this.importAll(require.context('../images/', false, /\.(png|jpe?g|svg)$/));
    }

    render(){

        return(
          <div>
          {
            listOfImages.map(
              (image, index) =>    
                <Photo
                  key={index} 
                  src={image} 
                  alt=""
                />
            )
          }
          </div>
        )
    }
}