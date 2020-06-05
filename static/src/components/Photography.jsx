import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../css/photography.css";
import { Dropdown, DropdownButton, DropdownToggle, DropdownMenu, DropdownItem } from 'react-bootstrap';

var listOfImages = [];
var images = [];
var container = React.createRef();

export default class Photography extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "Events",
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.filterPhotos = this.filterPhotos.bind(this);
  }

  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    this.filterPhotos(this.state.selectedFilter);
  }

  filterPhotos(photoCategory) {
    // import the list based on what the user chose in the drop-down
    if (photoCategory === 'Events') {
      listOfImages = this.importAll(require.context('../images/events/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory === 'Nature') {
      listOfImages = this.importAll(require.context('../images/nature/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory === 'Portraits') {
      listOfImages = this.importAll(require.context('../images/portrait/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory=== 'Still Life') {
      listOfImages = this.importAll(require.context('../images/still_life/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory === 'Street') {
      listOfImages = this.importAll(require.context('../images/street/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory === 'Themed') {
      listOfImages = this.importAll(require.context('../images/themed/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory === 'Weddings') {
      listOfImages = this.importAll(require.context('../images/weddings/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (photoCategory=== 'Wild Life') {
      listOfImages = this.importAll(require.context('../images/wild_life/', false, /\.(png|jpe?g|svg)$/));
    }
    // use all images
    else {
      listOfImages = this.importAll(require.context('../images/', true, /\.(png|jpe?g|svg)$/));
    }
    // create a objects from the imported listOfImages
    images = listOfImages.map(x => ({original: x, thumbnail: x}));
  }

  handleSelect(evt) {
    this.setState({
      selectedFilter: evt
    });
    this.filterPhotos(evt);
  }

  render(){

      var filterButtonTitle = 'Filter: ' + this.state.selectedFilter;

      return(
        <React.Fragment>
        <div className="container" ref={container}>
          <DropdownButton id="dropdown-item-button" title={filterButtonTitle} onSelect={this.handleSelect}>
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="Events">Events</Dropdown.Item>
            <Dropdown.Item eventKey="Portraits">Portraits</Dropdown.Item>
            <Dropdown.Item eventKey="Still Life">Still Life</Dropdown.Item>
            <Dropdown.Item eventKey="Street">Street</Dropdown.Item>
            <Dropdown.Item eventKey="Weddings">Weddings</Dropdown.Item>
            <Dropdown.Item eventKey="Wild Life">Wild Life</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <ImageGallery 
            items={images} 
            showBullets={true}
            showIndex={true}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={true}
          />
        </div>
        </React.Fragment>
      )
    }
}