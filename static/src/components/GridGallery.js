import React, { Component, useState, useCallback } from 'react';	
import { render } from 'react-dom';	
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from "react-images";
import "../css/photography.css";

import { photos } from "./photos";


export default function GridGallery() {	

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
      <React.Fragment>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              frameProps={{autoSize: true | true | 'width' | 'height'}}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
              }))}
            />
          </Modal>
          
        ) : null}
      </ModalGateway>
      </React.Fragment>
  );

    
}