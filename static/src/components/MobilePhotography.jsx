import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import "../css/photography.css";

export default function GridGallery() { 

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  var listOfImages = [];  
  var images = [];  
  var categorizedPhotos = [];

  const getMeta = (src) => {
    src = src + '';
    var res = src.split(".");
    var res2 = res[0].split("_");
    var width = res2[1];
    var height = res2[2];
    // create an object from the imported listOfImages
    var metaData = {src: src, width: width, height: height};
    return metaData;
  }

  const importAll = (r) => {
    return r.keys().map(r); 
  }

  const filterPhotos = (photoCategory) => {
    // import the list based on what the user chose in the drop-down
    if (photoCategory.includes("events")) {
      images = importAll(require.context('../images/events/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("nature")) {
      images = importAll(require.context('../images/nature/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("portrait")) {
      images = importAll(require.context('../images/portrait/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("still_life")) {
      images = importAll(require.context('../images/still_life/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("street")) {
      images = importAll(require.context('../images/street/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("themed")) {
      images = importAll(require.context('../images/themed/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("weddings")) {
      images = importAll(require.context('../images/weddings/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory.includes("wild_life")) {
      images = importAll(require.context('../images/wild_life/', false, /\.(png|jpe?g|svg)$/));
    }
    
    return images;
 } 

 const getPhotos = () => {
    var currentWindow = window.location.href;
    console.log(currentWindow);
    listOfImages = filterPhotos(currentWindow);
    var index;
    for (index = 0; index < listOfImages.length; ++index) {
       var meta = getMeta(listOfImages[index]);
       categorizedPhotos.push(meta);
    };
  }

  return (
      <Gallery 
        direction={"column"} 
        photos={categorizedPhotos} 
        onLoad={getPhotos()}
      />
  );   
}