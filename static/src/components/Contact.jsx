import React, { Component } from 'react';
import '../css/contactme.css';

export default class Contact extends Component {

	render() {

	  return (

      <React.Fragment>
      <div className="w3-animate-left parentContainer">
        <h1>Billy Denham</h1>
          <h6>
            Photographer based in Philadelphia, PA<br/>
            For general or work inquires please contact me at<br/>
            <a href="mailto:williamdenham107@gmail.com">williamdenham107@gmail.com</a>
            <br/>
              <a href="https://www.linkedin.com/in/william-denham-33724b180/" class="fa fa-linkedin" target="_blank"></a>
              <a href="https://www.instagram.com/billy.denham/?hl=en" class="fa fa-instagram" target="_blank"></a>
            <br/>
        </h6>
      </div>
      <div className="w3-animate-right">
        <footer>
          <h6>
          <a href="https://github.com/GeorgeDiNicola" class="fa fa-github" target="_blank"></a>
          <br/>
          Web Design & Development: George DiNicola 
          </h6> 
        </footer>
      </div>
      </React.Fragment>
    );
  }
}