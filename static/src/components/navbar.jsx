import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import '../css/navbar.css'

// Stateless functional component


// ISSUE WITH THE NAVBAR IS THAT THE IMAGES ARE PART OF THE BACKGROUND AND NAV IS NOT
// WHICH MEANS THE IMAGE HEIGHT CANNOT ACCOUNT FOR THE SIZE OF THE NAVBAR
// THEY WILL NEED TO BE ACTUAL IMAGES RATHER THAN BACKGROUND ONES MAYBE?

export default function NavBar() {

	return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <a class="navbar-brand" href="#">Billy Denham</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#home">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="./Photography">Photography</a>
            <a class="nav-item nav-link" href="#videography">Videography</a>
            <a class="nav-item nav-link" href="#contact">Contact Me</a>
          </div>
        </div>
      </nav>
  );
}