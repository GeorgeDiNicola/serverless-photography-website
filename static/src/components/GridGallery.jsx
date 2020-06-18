import React, { Component } from 'react';	
import { render } from 'react-dom';	
import Gallery from "react-photo-gallery";	

var listOfImages = [];	
var images = [];	

export const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/5P91SF0zNsI/740x494",
    width: 4,
    height: 3
  }
];

export default class GridGallery extends Component {	

  constructor(props) {
    super(props);
    this.state = {
            loaded: false
        };
    //this.getPhotos = this.getPhotos.bind(this);
  }

  getMeta(url){   
    var img = new Image();
    img.onload = function(){
       console.log(this.width+' '+ this.height);
       img.src = url;
       if (parseInt(this.width, 10) > parseInt(this.height, 10)) {
         var metaData = {src: url, width: 4, height: 3};
         console.log("1");
       } else if (parseInt(this.height, 10) > parseInt(this.width, 10)) {
         var metaData = {src: url, width: 3, height: 4};
         console.log("2");
       } else {
         var metaData = {src: url, width: 1, height: 1};
         console.log("3");
      return metaData;
    };
   
    };

   }

   importAll(r) {	
    return r.keys().map(r);	
  }	

  componentDidMount() {
    //getPhotos() {
    listOfImages = this.importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
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

    return(	
      <div onLoad={this.getPhotos}>
      <Gallery 
        photos={images} 
        direction={"column"}
      />
      </div>
    );	
  }	

 } 