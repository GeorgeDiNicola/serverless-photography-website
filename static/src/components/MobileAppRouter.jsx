import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

/* Mobile components */
import MobileHome from './MobileHome.jsx';
import MobilePhotography from './MobilePhotography.jsx';
import Videography from './Videography.jsx';
import MobileContact from './MobileContact.jsx';
import GridGallery from './GridGallery.js';
import NavBar from './navbar.jsx';

const AppRouter = () => (

	  <BrowserRouter>
      <div>
      <NavBar />
      <div className="page-body">
        <Route exact path="/" component={MobileHome}/>
        <Route path="/Home" component={MobileHome}/>
        <Route path="/Photography" component={MobilePhotography}/>
        <Route path="/Videography" component={Videography}/>
        <Route path="/Contact" component={MobileContact}/>
        <Route path="/All" component={GridGallery}/>
      </div>
      </div>
    </BrowserRouter>
  )
export default AppRouter;