import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import "../css/photography.css";

import { photos } from "./photos";


export default function GridGallery() {	

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  return (
      <Gallery 
        direction={"column"} 
        photos={photos}
      />
  );   
}