import React from 'react';
import '../css/navbar.css'

// Stateless functional component
export default function NavBar() {

  var activeHomePage = 'nav-item active activated';
  var activePhotoPage = 'nav-item active';
  var activeVideoPage = 'nav-item active';
  var activeContactPage = 'nav-item active';

  /*

  USE ONCLICK METHOD TO CHANGE THE NAVIGATIONAL TEXT BASED ON THE SCREEN

  navbar will maybe need to hold a state indicating which page it is on

  */

	return (
    <nav class="navbar navbar-expand fixed-top navbar-light">
          <ul class="navbar-nav">
              <li class={activeHomePage}>
                <a class="nav-link" href="./Home">Home</a>
              </li>
              <li class={activePhotoPage}>
                <a class="nav-link" href="./Photography">Photos</a>
              </li>
              {/*<a href="./Home">Brand</a>*/}
              <li class={activeVideoPage}>
                <a class="nav-link" href="./Videography">Videos</a>
              </li>
              <li class={activeContactPage}>
                <a class="nav-link" href="./Contact">Contact</a>
              </li>
          </ul>
    </nav>
  );
}