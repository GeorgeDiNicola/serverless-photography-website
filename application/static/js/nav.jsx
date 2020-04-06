import React from "react";
import { MenuItem, Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap"

export class Nav extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<nav class="navbar navbar-expand-md bg-dark navbar-dark">\
  			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    			<span class="navbar-toggler-icon"></span>
  			</button>
  			<div class="collapse navbar-collapse" id="collapsibleNavbar">
    		<ul class="navbar-nav">
      			<li class="nav-item">
        		<a class="nav-link" href="#">Home</a>
      			</li>
      			<li class="nav-item">
        		<a class="nav-link" href="#">Photo</a>
      			</li>
      			<li class="nav-item">
        		<a class="nav-link" href="#">Video</a>
     			</li>
      			<li class="nav-item">
        		<a class="nav-link" href="#">Contact Me</a>
      			</li>
    		</ul>
  		</div>  
		</nav>
		<br>
		)
	}
}