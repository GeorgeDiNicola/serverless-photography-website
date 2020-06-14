import React, { Component } from 'react';
import AppRouter from './components/AppRouter.jsx';
import './App.css';


export default class App extends Component {

  constructor() {
    super();  // you must also pass props to the constructor of the base class.
    console.log('App - Constructor');
    //this.state = this.props.something;
  };

  componentDidMount() {
    // Ajax Call
    console.log('App - Mounted');
  };

  /*
  handleIncrement = counter => {
    const counters = [...this.state.counters];  // this is a fast way to copy the state object to the "counters" array!
    const index = counters.indexOf(counter);
    counters[index] = {...counter };  // clone the counter object received in the function. This is because we should not set the state directly
    counters[index].value++;
    this.setState({ counters });  // set the state to the new counters array
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    // create an array for the counters that are not going to be deleted
    const counters = this.state.counters.filter(c => c.id !== counterId);  // filter out the counter with the given id. get all of the ones without the given id.
    this.setState({ counters });  // overwrite the counters property with this counters constant
  };
  */

  // we have to wrap with React.Fragment since there are multiple components being rendered
  render() {
    console.log("App - Rendered");

    return (
      <AppRouter />
    );
  }
}
