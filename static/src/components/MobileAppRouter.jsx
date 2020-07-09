import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

/* Mobile components */
import MobileHome from './MobileHome.jsx';
import MobilePhotography from './MobilePhotography.jsx';
import Videography from './Videography.jsx';
import MobileContact from './MobileContact.jsx';
import MobileGridGallery from './MobileGridGallery.js';
import MobileNavBar from './MobileNavBar.jsx';
import MobileAbout from './MobileAbout.jsx';

const AppRouter = () => (

	  <BrowserRouter>
      <div>
      <MobileNavBar />
      <div className="page-body">
        <Route exact path="/" component={MobileHome}/>
        <Route path="/Home" component={MobileHome}/>
        <Route path="/About" component={MobileAbout}/>
        <Route path="/Photography" component={MobilePhotography}/>
        <Route path="/Videography" component={Videography}/>
        <Route path="/Contact" component={MobileContact}/>
        <Route path="/All" component={MobileGridGallery}/>
      </div>
      </div>
    </BrowserRouter>
  )
export default AppRouter;