import React, { Component } from 'react';
import '../css/contact.css';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submittedForm: false,
      firstName: null,
      lastName: null,
      emailAddress: null,
      messageText: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    this.setState({ submittedForm: true });
    event.preventDefault();  // this prevents the page from re-loading when the form is submitted
  }

  handleChange(input) {
    if (input === "firstName") {
      console.log("change detected");
    }
    else if (input === "lastName") {
      console.log("change detected");
    }
    else if (input === "emailAddress") {
      console.log("change detected");
    }
    else if (input === "messageText") {
      console.log("change detected");
    }
  }

  //TODO: define a sendEmail method

	render() {

	  return (

      <React.Fragment>
      <div id="page-container">
      
      <div className="about-content">
        <div className="w3-animate-left">
          <div className="header-text">Billy Denham
          </div>
          <h6>
            Photographer based in Philadelphia, PA
            <br/>
            <a href="mailto:williamdenham107@gmail.com">williamdenham107@gmail.com</a>
            <br/>
            <br/>
          </h6>
        </div>
      </div>
      
    {/* ternary operator for conditional rendering of the form */}
      {!this.state.submittedForm ?
      
      <div className="form-container">
        <div className="w3-animate-fading">
          <form onSubmit={this.handleSubmit}>
            <h6>
              For general or work inquiries, please fill out the form below
             </h6>
            <input 
              class="name-text-box"
              type="text" 
              id="fname" 
              name="firstname" 
              placeholder="First name.."
              onChange={this.handleChange("firstName")}
            ></input>&nbsp;&nbsp;&nbsp;
            <input class="name-text-box"
              type="text" 
              id="lname" 
              name="lastname" 
              placeholder="Last name.."
              onChange={this.handleChange("lastName")}
            ></input>
            <br/>
            <br/>
            <input 
              className="email-text-box"
              type="text" 
              id="email" 
              name="email" 
              placeholder="Email address.."
              onChange={this.handleChange("emailAddress")}
            ></input>
            <br/>
            <br/>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Write a message.."
              onChange={this.handleChange("messageText")}
            >
            </textarea>
            <br/>
            <br/>
            <input type="submit" value="Submit" onclick="return false"></input>
          </form>
        </div>
      </div>

      : <h2>Message sent. Thank you!</h2>}
    
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