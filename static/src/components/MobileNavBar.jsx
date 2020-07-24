import React, { Component } from 'react';
import '../css/navbar.css'

export default class MobileNavBar extends Component {

  constructor(props) {
    super(props);
    this.detectBrowserChange = this.detectBrowserChange.bind(this);
  }
  
  detectBrowserChange() {
    var currentWindow = window.location.href;
    if (currentWindow.includes("Videography")) {
      this.parentNavClass = "navbar navbar-expand-sm navbar-dark bg-black sticky-top";
    }
    else {
      this.parentNavClass = "navbar navbar-expand-sm navbar-dark bg-black";
    }
  }

  render() {
    this.detectBrowserChange()
  
    return (
      <nav class={this.parentNavClass}>
        <a class="navbar-brand" href="/">
          <img src={require("../brand/aperture_logo.png")} width="30" height="30" class="d-inline-block align-top" alt=""></img>
          &nbsp;Billy Denham
        </a>
        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
          <span class="icon-bar top-bar"></span>
          <span class="icon-bar middle-bar"></span>
          <span class="icon-bar bottom-bar"></span>       
        </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul class="navbar-nav">
              <li className="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/About">About</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Photos
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/All">All</a>
                  <a class="dropdown-item" href="/Photography#events">Events</a>
                  <a class="dropdown-item" href="/Photography#nature">Nature</a>
                  <a class="dropdown-item" href="/Photography#portraits">Portraits</a>
                  <a class="dropdown-item" href="/Photography#still_life">Still Life</a>
                  <a class="dropdown-item" href="/Photography#street">Street</a>
                  <a class="dropdown-item" href="/Photography#weddings">Weddings</a>
                  <a class="dropdown-item" href="/Photography#wild_life">Wild Life</a>
                </div>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/Videography">Videos</a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="/Contact">Contact</a>
              </li>
            </ul>
        </div>
      </nav>
    );
  }
}