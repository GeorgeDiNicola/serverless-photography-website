import React from 'react';
import Gallery from 'react-photo-gallery';
import "../css/photography.css";
import { photos } from "./photos";


export default function GridGallery() {

  return (
      <Gallery 
        direction={"column"} 
        photos={photos}
      />
  );   
}