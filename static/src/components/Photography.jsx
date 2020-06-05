import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../css/photography.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

var listOfImages = [];
var images = [];
var container = React.createRef();

export default class Photography extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: "all",
    };
  }

  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    // import the list based on what the user chose in the drop-down
    if (this.state.filter === 'Events') {
      listOfImages = this.importAll(require.context('../images/events/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (this.state.filter === 'Nature') {
      listOfImages = this.importAll(require.context('../images/nature/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (this.state.filter === 'Portraits') {
      listOfImages = this.importAll(require.context('../images/portrait/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (this.state.filter === 'Still Life') {
      listOfImages = this.importAll(require.context('../images/still_life/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (this.state.filter === 'Street') {
      listOfImages = this.importAll(require.context('../images/street/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (this.state.filter === 'Themed') {
      listOfImages = this.importAll(require.context('../images/themed/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (this.state.filter === 'Weddings') {
      listOfImages = this.importAll(require.context('../images/weddings/', false, /\.(png|jpe?g|svg)$/));
    }
    else if (this.state.filter === 'Wild Life') {
      listOfImages = this.importAll(require.context('../images/wild_life/', false, /\.(png|jpe?g|svg)$/));
    }
    // use all
    else {
      listOfImages = this.importAll(require.context('../images/wild_life/', false, /\.(png|jpe?g|svg)$/));
    }
    // create a objects from the imported listOfImages
    images = listOfImages.map(x => ({original: x, thumbnail: x}));
  }

  render(){

      return(
        <React.Fragment>
        <div className="container" ref={container}>
          <Dropdown>
            <DropdownToggle caret>
              Filter
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem>Some Action</DropdownItem>
              <DropdownItem disabled>Action (disabled)</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Foo Action</DropdownItem>
              <DropdownItem>Bar Action</DropdownItem>
              <DropdownItem>Quo Action</DropdownItem>
            </DropdownMenu>
         </Dropdown>
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