import React from 'react';
import '../css/navbar.css'

// Stateless functional component
/*

  USE ONCLICK METHOD TO CHANGE THE NAVIGATIONAL TEXT BASED ON THE SCREEN

*/

export default function NavBar() {

	return (
    <nav class="navbar navbar-expand-sm fixed-top navbar-light">
      <div class="container">
          <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="./Home">Home</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="./Photography">Photos</a>
              </li>
              {/*<a href="./Home">Brand</a>*/}
              <li class="nav-item active">
                <a class="nav-link" href="./Videography">Videos</a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="./Contact">Contact</a>
              </li>
          </ul>
      </div>
    </nav>
  );
}