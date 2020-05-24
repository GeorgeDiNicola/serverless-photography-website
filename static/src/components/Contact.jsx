import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBFormInline
} from "mdbreact";
import '../images/83.jpg';
import '../css/contactme.css';

export default class Contact extends Component {

	render() {

	  return (
	   <div id="classicformpage">
        <MDBView>
          <MDBMask className="d-flex justify-content-center align-items-center gradient">
            <MDBContainer>
                  <h1>Billy Denham</h1>
                  <hr className="hr-light" />
                  <h6>
                    Photographer based in Philadelphia, PA<br/>
                    For general or work inquires please contact me at:<br/>
                    <a href="mailto:williamdenham107@gmail.com">williamdenham107@gmail.com</a>
                  <br/>
                    <a href="linkedin.com/in/william-denham-33724b180">Connect on LinkedIn</a>
                  </h6>
            </MDBContainer>
          </MDBMask>
        </MDBView>
      </div>
    );
  }
}