import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import "../css/photography.css";

var listOfImages = [];
var images = [];
var container = React.createRef();

export default class Photography extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,  // for the drop-down menu filter
    };
  }

  importAll(r) {
    return r.keys().map(r);
  }

  componentWillMount() {
    // import the list
    listOfImages = this.importAll(require.context('../images/events/', false, /\.(png|jpe?g|svg)$/));
    // create a objects from the imported listOfImages
    images = listOfImages.map(x => ({original: x, thumbnail: x}));
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleButtonClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };

  handleClickOutside = event => {
    if (container.current && !container.current.contains(event.target)) {
      this.setState({
        open: false,
      });
    }
  };

  render(){

      return(
        <React.Fragment>
        <div className="container" ref={container}>
          <button type="button" class="button" onClick={this.handleButtonClick}>
             ☰
          </button>
            {this.state.open && (
            <div class="dropdown">
              <ul>
                <li>All</li>
                <li>Events</li>
                <li>Nature</li>
                <li>Portraits</li>
                <li>Still Life</li>
                <li>Street</li>
                <li>Themed</li>
                <li>Weddings</li>
                <li>Wild Life</li>
              </ul>
            </div>
            )}
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