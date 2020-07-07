import React, { Component } from 'react';
import '../css/contact.css';
import emailjs from 'emailjs-com';
import {u_token} from "../config/config.js";

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

export default class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      submittedForm: false,
      firstName: "",
      lastName: "",
      emailAddress: "",
      messageText: "",
      errorText: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailAddressChange = this.handleEmailAddressChange.bind(this);
    this.handleMessageTextChange = this.handleMessageTextChange.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();  // this prevents the page from re-loading when the form is submitted
    if (this.state.firstName.length > 0 && this.state.lastName.length > 0 && validEmailRegex.test(this.state.emailAddress) && this.state.messageText.length > 0) {
      this.setState({ submittedForm: true });
      this.sendEmail(this.state.messageText, this.state.firstName, this.state.lastName, this.state.emailAddress);
    }
    
    if (this.state.firstName.length < 1) {
      this.setState({errorText: "Please enter your first name"});
    } else if (this.state.lastName.length < 1) {
      this.setState({errorText: "Please enter your last name"});
    } else if (this.state.emailAddress.length < 1) {
      this.setState({errorText: "Please enter your email address"});
    } else if (!validEmailRegex.test(this.state.emailAddress)) {
      this.setState({errorText: "Invalid email address"});
    } else if (this.state.messageText.length < 1) {
      this.setState({errorText: "Please enter a message"});
    }
  }

  sendEmail(message, fname, lname, email) {
    var template_params = {
      "messageText": message,
      "firstName": fname,
      "lastName": lname,
      "emailAddress": email
    };
    emailjs.send('default_service','form_submission', template_params, u_token);
  }

  handleFirstNameChange(event) {
    this.setState({firstName: event.target.value});
    if (event.target.value.length > 0) {
      this.setState({errorText: ""});
    }
  }

  handleLastNameChange(event) {
    this.setState({lastName: event.target.value});
    if (event.target.value.length > 0) {
      this.setState({errorText: ""});
    }
  }

  handleEmailAddressChange(event) {
    this.setState({emailAddress: event.target.value});
    if (this.state.errorText === "Please enter your email address" && event.target.value.length > 0) {
      this.setState({errorText: ""});
    }
    if (this.state.errorText === "Invalid email address" && validEmailRegex.test(event.target.value)) {
      this.setState({errorText: ""});
    }
  }

  handleMessageTextChange(event) {
    this.setState({messageText: event.target.value});
    if (event.target.value.length > 0) {
      this.setState({errorText: ""});
    }
  }

	render() {

	  return (

      <React.Fragment>
      <div id="page-container">
      
      <div className="about-content">
        <div className="w3-animate-left">
          <div className="header-text">Billy Denham
          </div>
          <h6>
            Photographer | Videographer | Editor 
            <br/>
            Philadelphia, PA
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
              className="name-text-box"
              type="text" 
              id="fname" 
              name="firstname"
              firstName={this.state.firstName}
              placeholder="First name.."
              onInput={this.handleFirstNameChange}
            ></input>&nbsp;&nbsp;&nbsp;
            <input 
              className="name-text-box"
              type="text" 
              id="lname" 
              name="lastname" 
              lastName={this.state.lastName}
              placeholder="Last name.."
              onInput={this.handleLastNameChange}
            ></input>
            <br/>
            <br/>
            <input 
              className="email-text-box"
              type="text" 
              id="email" 
              name="email"
              emailAddress={this.state.emailAddress}
              placeholder="Email address.."
              onInput={this.handleEmailAddressChange}
            ></input>
            <br/>
            <br/>
            <textarea 
              id="message" 
              name="message" 
              messageText={this.state.messageText}
              placeholder="Write a message.."
              onInput={this.handleMessageTextChange}
            >
            </textarea>
            <br/>
            <br/>
            <input type="submit" value="Submit" onclick="return false"></input>
            <br/>
            <span className="error-text">
              {this.state.errorText}
            </span> 
          </form>
        </div>
      </div>

      : <h2>Message sent. Thank you!</h2>
    }
    
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