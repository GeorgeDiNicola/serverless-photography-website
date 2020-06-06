import React, { Component } from 'react';
import {Route, Link, BrowserRouter} from 'react-router-dom';

import Home from './Home.jsx'
import Photography from './Photography.jsx'
import Videography from './Videography.jsx'
import Contact from './Contact.jsx'
import NavBar from './navbar';

export default class AppRouter extends Component {
	constructor(props) {
		super(props);
	}

	render() {

		return (
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
		);
	}
}