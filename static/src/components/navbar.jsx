import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../css/navbar.css'

export default class NavBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPhotoFilter: "",  // set default filter
    };
    // class methods
    this.detectBrowserChange = this.detectBrowserChange.bind(this);
  }
  
  detectBrowserChange() {
    var currentWindow = window.location.href;
    if (currentWindow.includes("Home")) {
      this.activeHomePage = 'nav-item activated-home';
      this.activePhotoPage = this.activeVideoPage = this.activeContactPage ='nav-item';
      this.parentNavClass = "navbar navbar-expand"
    }
    else if (currentWindow.includes("Photography")) {
      this.activePhotoPage = 'nav-item activated-photo';
      this.activeHomePage = this.activeVideoPage = this.activeContactPage ='nav-item';
      this.parentNavClass = "navbar navbar-expand"
    }
    else if (currentWindow.includes("Videography")) {
      this.activeVideoPage = 'nav-item activated-video';
      this.activeHomePage = this.activePhotoPage = this.activeContactPage ='nav-item';
      this.parentNavClass = "navbar fixed-top navbar-expand"
    }
    else if (currentWindow.includes("Contact")) {
      this.activeContactPage = 'nav-item active activated-contact';
      this.activeHomePage = this.activePhotoPage = this.activeVideoPage ='nav-item';
      this.parentNavClass = "navbar navbar-expand"
    }
    else {
      this.activeHomePage = 'nav-item activated-home';
      this.activePhotoPage = this.activeVideoPage = this.activeContactPage ='nav-item';
      this.parentNavClass = "navbar navbar-expand"
    }
  }

  render() {
    this.detectBrowserChange()
	
    return (
      <nav class={this.parentNavClass}>
            <ul class="navbar-nav">
                <li class={this.activeHomePage}>
                  <a class="nav-link" href="./">Home</a>
                </li>
                <li class={this.activePhotoPage}>
                  <DropdownButton id="dropdown-item-button" class="nav-link" title="Photos" onSelect={this.handleSelect}>
                    <Dropdown.Item href="./Photography#events">Events</Dropdown.Item>
                    <Dropdown.Item href="./Photography#nature">Nature</Dropdown.Item>
                    <Dropdown.Item href="./Photography#portraits">Portraits</Dropdown.Item>
                    <Dropdown.Item href="./Photography#still_life">Still Life</Dropdown.Item>
                    <Dropdown.Item href="./Photography#street">Street</Dropdown.Item>
                    <Dropdown.Item href="./Photography#weddings">Weddings</Dropdown.Item>
                    <Dropdown.Item href="./Photography#wild_life">Wild Life</Dropdown.Item>
                  </DropdownButton>
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