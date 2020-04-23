import React, { Component } from 'react';
import Counter from './counter';


export default class Counters extends Component {

	state = {
		counters: [
			{ id: 1, value: 4 },
			{ id: 2, value: 0 },
			{ id: 3, value: 0 },
			{ id: 4, value: 0 }
		]
	};

	handleIncrement = counter => {
		const counters = [...this.state.counters];  // this is a fast way to copy the state object to the "counters" array!
		const index = counters.indexOf(counter);
		counters[index] = {...counter };  // clone the counter object received in the function. This is because we should not set the state directly
		counters[index].value++;
		this.setState({ counters });  // set the state to the new counters array
	}

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

	// the Counter class is called 4 times (number of counter objects in state), and h4 is passed to counter.jsx through this.props.children
	// key, onDelete, and value are props!!! props being passed down to the counter component
	// map takes the place of a for loop. you map each element inside of counters (inside of the state) to the <Counter> component.
	// this.handleDelete is a reference being passed to the <Counter> component, so that when ondelete is called, it will use the method in the parent.
	render() {
	  return (
		<div>
		  <button
		    onClick={this.handleReset}
		    className="button.btn.btn-primary btn-sm m-2">Reset</button>
		  { this.state.counters.map(counter => 
		  	<Counter 
		  	  key={counter.id} 
		  	  onDelete={this.handleDelete} 
		  	  onIncrement={this.handleIncrement}
		  	  counter={ counter }
		  	/>
		  )}
		</div>
	  )
	}
}