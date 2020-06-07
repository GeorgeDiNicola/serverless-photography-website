import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import '../css/navbar.css'

export default class NavBar extends Component {

  constructor(props) {
    super(props);

    // class methods
    this.detectBrowserChange = this.detectBrowserChange.bind(this);
  }
  
  detectBrowserChange() {
    var currentWindiw = window.location.href;
    if (currentWindiw.includes("Home")) {
      this.activeHomePage = 'nav-item activated-home';
      this.activePhotoPage = this.activeVideoPage = this.activeContactPage ='nav-item';
      this.currentPageId = 'home';
    }
    else if (currentWindiw.includes("Photography")) {
      this.activePhotoPage = 'nav-item activated-photo';
      this.activeHomePage = this.activeVideoPage = this.activeContactPage ='nav-item';
      this.currentPageId = 'photo';
    }
    else if (currentWindiw.includes("Videography")) {
      this.activeVideoPage = 'nav-item activated-video';
      this.activeHomePage = this.activePhotoPage = this.activeContactPage ='nav-item';
      this.currentPageId = 'video';
    }
    else if (currentWindiw.includes("Contact")) {
      this.activeContactPage = 'nav-item active activated-contact';
      this.activeHomePage = this.activePhotoPage = this.activeVideoPage ='nav-item';
      this.currentPageId = 'contact';
    }
    else {
      this.activeHomePage = 'nav-item activated-home';
      this.activePhotoPage = this.activeVideoPage = this.activeContactPage ='nav-item';
      this.currentPageId = 'home';
    }
  }

  render() {
    this.detectBrowserChange()
	
    return (
      <nav class="navbar navbar-expand fixed-top navbar-light">
            <ul class="navbar-nav">
                <li id={this.currentPageId} class={this.activeHomePage}>
                  <a id={this.currentPageId} class="nav-link" href="./Home">Home</a>
                </li>
                {/*<li id={this.currentPageId} class={this.activePhotoPage}>
                  <a id={this.currentPageId} class="nav-link" href="./Photography">Photos</a>
                </li>
                */}
                <li id={this.currentPageId} class={this.activePhotoPage}>
                <DropdownButton id="dropdown-item-button" class="nav-link" title="Photos" onSelect={this.handleSelect}>
                  <Dropdown.Item eventKey="Events">Events</Dropdown.Item>
                  <Dropdown.Item eventKey="Nature">Nature</Dropdown.Item>
                  <Dropdown.Item eventKey="Portraits">Portraits</Dropdown.Item>
                  <Dropdown.Item eventKey="Still Life">Still Life</Dropdown.Item>
                  <Dropdown.Item eventKey="Street">Street</Dropdown.Item>
                  <Dropdown.Item eventKey="Weddings">Weddings</Dropdown.Item>
                  <Dropdown.Item eventKey="Wild Life">Wild Life</Dropdown.Item>
                </DropdownButton>
                </li>
                {/*<a href="./Home">Brand</a>*/}
                <li id={this.currentPageId} class={this.activeVideoPage}>
                  <a id={this.currentPageId} class="nav-link" href="./Videography">Videos</a>
                </li>
                <li id={this.currentPageId} class={this.activeContactPage}>
                  <a id={this.currentPageId} class="nav-link" href="./Contact">Contact</a>
                </li>
            </ul>
      </nav>
    );
  }
}