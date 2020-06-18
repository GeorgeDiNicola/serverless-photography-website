import React, { Component } from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Home from './Home.jsx'
import Photography from './Photography.jsx'
import Videography from './Videography.jsx'
import Contact from './Contact.jsx'
import PhotoGrid from './PhotoGrid.jsx';
import NavBar from './navbar.jsx';

const AppRouter = () => (

	  <BrowserRouter>
      <div>
      <NavBar />
      <div className="page-body">
        <Route exact path="/" component={Home}/>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Photography" component={Photography}/>
        <Route exact path="/Videography" component={Videography}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/All" component={PhotoGrid}/>
      </div>
      </div>
    </BrowserRouter>
  )
export default AppRouter;