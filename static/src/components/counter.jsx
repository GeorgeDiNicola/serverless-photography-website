import React, { Component } from 'react';

export default class Counter extends Component {

	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps);
		console.log('prevState', prevState);
		if (prevProps.counter.value !== this.props.counter.value) {
			// Ajax call and get new data from the server
		}
	};

	componentWillUnmount() {
		console.log("Counter - Unmount");
	};

	//constructor() {
	//	super();  // call the constructor of the parent class
	//	this.handleIncrement = this.handleIncrement.bind(this);  //gives the handleIncrement method access to the this method
	//};

	render() {
		console.log("Counter - Rendered")

		return (
			<div>
			  <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
			  <button 
			    onClick={() => this.props.onIncrement(this.props.counter)} 
			    className="btn btn-secondary btn-sm"
			  >
			   Increment
			  </button>
			  <button 
			    onClick={() => this.props.onDelete(this.props.counter.id)}
			    className = "btn btn-danger btn-sm m-2">
			     Delete
			  </button>
			</div>
		);
	}


	formatCount() {
		// this.state works because it only has one element at a time passed from the <Counters> component.
		const { value } = this.props.counter;

		return value === 0 ? "Zero" : value;
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning" : "primary";
		return classes
	}
}