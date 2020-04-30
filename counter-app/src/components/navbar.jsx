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

// Stateless functional component
export default function NavBar() {

	return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">Billy Denham</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="./Home">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="./Photography">Photography</a>
            <a class="nav-item nav-link" href="./Videography">Videography</a>
            <a class="nav-item nav-link" href="./Contact">Contact Me</a>
          </div>
        </div>
      </nav>
  );
}