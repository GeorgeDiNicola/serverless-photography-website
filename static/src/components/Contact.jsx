import React, { Component } from 'react';
import '../css/contactme.css';

export default class Contact extends Component {

	render() {

	  return (

      <React.Fragment>
      <div id="page-container">
      
      <div className="about-content">
        <div className="w3-animate-left">
          <div className="header-text">Billy Denham</div>
            <h6>
              Photographer based in Philadelphia, PA
            <br/>
            <a href="mailto:williamdenham107@gmail.com">williamdenham107@gmail.com</a>
            <br/>
            <br/>
            </h6>
        </div>
     </div>
      <div className="form-container">
        <div className="w3-animate-fading">
        <form>
          <h6>For general or work inquiries, please fill out the form below</h6>
          <input class="name-text-box"
            type="text" 
            id="fname" 
            name="firstname" 
            placeholder="First name.."
          ></input>&nbsp;&nbsp;&nbsp;
          <input class="name-text-box"
            type="text" 
            id="lname" 
            name="lastname" 
            placeholder="Last name.."
          ></input>
          <br/>
          <br/>
          <input className="email-text-box"
            type="text" 
            id="email" 
            name="email" 
            placeholder="Email address.."
          ></input>
          <br/>
          <br/>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Write a message.."
          >
          </textarea>
          <br/>
          <br/>
          <input type="submit" value="Submit"></input>
        </form>
        </div>
      </div>
    <div className="footer">
          <div className="w3-animate-right">
            <span className="footer-text">
              <a href="https://www.linkedin.com/in/william-denham-33724b180/" class="fa fa-linkedin" target="_blank"></a>
              <a href="https://www.instagram.com/billy.denham/?hl=en" class="fa fa-instagram" target="_blank"></a>
              <br/>
                Web Design & Development: George DiNicola 
            </span> 
           </div>
    </div>
        </div>
      </React.Fragment>
    );
  }
}