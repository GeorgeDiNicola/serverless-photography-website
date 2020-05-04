import React, { Component } from 'react';
import '../css/image.css'

export default class Image extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
		  <div className="Image">
		    <img src={this.props.src} width="500" alt="" />
		  </div>
		);
	}
}