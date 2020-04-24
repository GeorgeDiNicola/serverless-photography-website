import React, { Component } from 'react';
import Counter from './counter';


export default class Counters extends Component {

	render() {

	  const { onReset, counters, onDelete, onIncrement } = this.props; // use of object destructuring
	
	// the Counter class is called 4 times (number of counter objects in state), and h4 is passed to counter.jsx through this.props.children
	// key, onDelete, and value are props!!! props being passed down to the counter component
	// map takes the place of a for loop. you map each element inside of counters (inside of the state) to the <Counter> component.
	// this.handleDelete is a reference being passed to the <Counter> component, so that when ondelete is called, it will use the method in the parent.
	  return (
		<div>
		  <button
		    onClick={onReset}
		    className="button.btn.btn-primary btn-sm m-2">Reset</button>
		  {this.props.counters.map(counter => 
		  	<Counter 
		  	  key={counter.id} 
		  	  onDelete={onDelete} 
		  	  onIncrement={onIncrement}
		  	  counter={counter}
		  	/>
		  )}
		</div>
	  )
	}
}