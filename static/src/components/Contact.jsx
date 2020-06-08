import React, { Component } from 'react';
import '../css/contactme.css';

export default class Contact extends Component {

	render() {

	  return (
	    <div className="w3-animate-left">
        <h1>Billy Denham</h1>
          <h6>
            Photographer based in Philadelphia, PA<br/>
            For general or work inquires please contact me at:<br/>
            <a href="mailto:williamdenham107@gmail.com">williamdenham107@gmail.com</a>
            <br/>
            <a href="https://linkedin.com/in/william-denham-33724b180" target="_blank">Connect on LinkedIn</a>
        </h6>
      </div>
    );
  }
}