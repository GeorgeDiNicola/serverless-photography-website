import React, { Component } from 'react';

// Stateless functional component
export default function NavBar({ totalCounters }) {
	return ( 
		<nav className="navbar navbar-light bg-light">
		  <a className="navbar-brand" href="#">
		    NavBar{" "}
		    <span className="badge badge-pill badge-secondary">
		      {totalCounters}
		    </span>
		  </a>
		</nav>
	);
};