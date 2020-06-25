import React, { Component } from 'react';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';

/* Mobile components */
import MobileHome from './MobileHome.jsx'
import Photography from './Photography.jsx'
import Videography from './Videography.jsx'
import Contact from './Contact.jsx'
import GridGallery from './GridGallery.js';
import NavBar from './navbar.jsx';

const AppRouter = () => (

	  <BrowserRouter>
      <div>
      <NavBar />
      <div className="page-body">
        <Route exact path="/" component={MobileHome}/>
        <Route path="/Home" component={MobileHome}/>
        <Route path="/Photography" component={Photography}/>
        <Route path="/Videography" component={Videography}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/All" component={GridGallery}/>
      </div>
      </div>
    </BrowserRouter>
  )
export default AppRouter;