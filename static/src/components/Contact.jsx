import React, { Component } from 'react';
import '../css/contactme.css';

export default class Contact extends Component {

	render() {

    // The profile badge stopped working....

	  return (

      <div className="parentContainer">
      

      <div className="w3-animate-left left inline">
        <h1>Billy Denham</h1>
          <h6>
            Photographer based in Philadelphia, PA<br/>
            For general or work inquires please contact me at<br/>
            <a href="mailto:williamdenham107@gmail.com">williamdenham107@gmail.com</a>
            <br/>
            <br/>
            <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="georgedinicola">
              <a class="LI-simple-link" href='https://www.linkedin.com/in/georgedinicola?trk=profile-badge'>
                George DiNicola
              </a>
            </div>
        </h6>
      </div>

      <div className="w3-animate-right right inline">
        <h1>George DiNicola</h1>
          <h6>
            Web Development & Design<br/>
            Full Stack Engineer<br/>
            <a href="mailto:george.j.dinicola@gmail.com">george.j.dinicola@gmail.com</a>
            <br/>
            <br/>
            <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="georgedinicola">
              <a class="LI-simple-link" href='https://www.linkedin.com/in/georgedinicola?trk=profile-badge'>
                George DiNicola
              </a>
            </div>
        </h6>
      </div>


      </div>
    );
  }
}