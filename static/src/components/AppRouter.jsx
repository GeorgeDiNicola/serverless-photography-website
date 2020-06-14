import React, { Component } from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';

import Home from './Home.jsx'
import Photography from './Photography.jsx'
import Videography from './Videography.jsx'
import Contact from './Contact.jsx'
import NavBar from './navbar';

import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "../css/loaders.css";

export default class AppRouter extends Component {
	constructor(props) {
	  super(props);
      this.state = {
        component: null,
      };
	}

	componentDidMount() {
    // set the component state asynchronously
      setTimeout(() => {
        this.setState({ component:
          <BrowserRouter>
		    <div>
		      <NavBar />
		        <div className="page-body">
		          <Route exact path="/" component={Home}/>
		          <Route exact path="/Home" component={Home}/>
		          <Route exact path="/Photography" component={Photography}/>
		          <Route exact path="/Videography" component={Videography}/>
		          <Route exact path="/Contact" component={Contact}/>
		        </div>
		      </div>
		    </BrowserRouter>
        });
	    }, 2000);  // ,5000); to show the spinner
	  }

	render() {

		return (
		  this.state.component || (
          <div className="loader">
            <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
          </div>
          )
		)
	}
}