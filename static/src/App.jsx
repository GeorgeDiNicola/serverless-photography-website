import React, { Component } from 'react';
import AppRouter from './components/AppRouter.jsx';
import MobileAppRouter from './components/MobileAppRouter.jsx';
import './App.css';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isDesktop: false //This is where I am having problems
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 425 && window.innerWidth >= window.innerHeight});  // check size and orientation of the browser window
  }

  render() {

  	var isDesktop = this.state.isDesktop;

  	return(
  	  <div>
  	    {isDesktop ? (
           <AppRouter />
  	  	  ) : (
  	  	   <MobileAppRouter />
  	     )}
  	  </div>
  	)
  }
}