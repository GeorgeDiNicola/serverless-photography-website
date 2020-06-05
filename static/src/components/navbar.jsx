import React, { Component } from 'react';
import '../css/navbar.css'

// Stateless functional component
export default class NavBar extends Component {

  constructor(props) {
    super(props);

    // class methods
    this.activeHomePage = 'nav-item active';
    this.activePhotoPage = 'nav-item active';
    this.activeVideoPage = 'nav-item active';
    this.activeContactPage = 'nav-item active';
    this.detectBrowserChange = this.detectBrowserChange.bind(this);
  }
  

  detectBrowserChange() {
    var currentWindiw = window.location.href;
    if (currentWindiw.includes("Home")) {
      this.activeHomePage = 'nav-item active activated';
      this.activePhotoPage = this.activeVideoPage = this.activeContactPage ='nav-item active';
    }
    else if (currentWindiw.includes("Photography")) {
      this.activePhotoPage = 'nav-item active activated';
      this.activeHomePage = this.activeVideoPage = this.activeContactPage ='nav-item active';
    }
    else if (currentWindiw.includes("Videography")) {
      this.activeVideoPage = 'nav-item active activated';
      this.activeHomePage = this.activePhotoPage = this.activeContactPage ='nav-item active';
    }
    else if (currentWindiw.includes("Contact")) {
      this.activeContactPage = 'nav-item active activated';
      this.activeHomePage = this.activePhotoPage = this.activeVideoPage ='nav-item active';
    }
    else {
      this.activeHomePage = 'nav-item active activated';
      this.activePhotoPage = this.activeVideoPage = this.activeContactPage ='nav-item active';
    }
  }

  render() {
    this.detectBrowserChange()
	
    return (
      <nav class="navbar navbar-expand fixed-top navbar-light">
            <ul class="navbar-nav">
                <li class={this.activeHomePage}>
                  <a class="nav-link" href="./Home">Home</a>
                </li>
                <li class={this.activePhotoPage}>
                  <a class="nav-link" href="./Photography">Photos</a>
                </li>
                {/*<a href="./Home">Brand</a>*/}
                <li class={this.activeVideoPage}>
                  <a class="nav-link" href="./Videography">Videos</a>
                </li>
                <li class={this.activeContactPage}>
                  <a class="nav-link" href="./Contact">Contact</a>
                </li>
            </ul>
      </nav>
    );
  }
}