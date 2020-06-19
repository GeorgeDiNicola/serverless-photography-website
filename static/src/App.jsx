import React, { Component } from 'react';
import AppRouter from './components/AppRouter.jsx';
import './App.css';

import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./css/loaders.css";
import SimpleReactLightbox from "simple-react-lightbox";


export default class App extends Component {

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
        <SimpleReactLightbox>
        <AppRouter />
        </SimpleReactLightbox>
      });
    }, 1000);  // ,5000); to show the spinner
  }

  render() {

    return (
      this.state.component || (
        <div className="loader">
          <Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />
        </div>
      )
    );
  }
}
