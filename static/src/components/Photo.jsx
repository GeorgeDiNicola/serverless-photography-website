import React, { Component } from 'react';
import '../css/image.css'

export default class Photo extends Component {

	constructor(props) {
		super(props);
		this.state = {dimensions: {}};
        this.onImgLoad = this.onImgLoad.bind(this);
	}

	onImgLoad({target:img}) {
        this.setState({dimensions:{height:img.naturalHeight,
                                   width:img.naturalWidth}});
    }


	render() {

		const {src} = this.props;
        const {width, height} = this.state.dimensions;

		return (
		  <div class="Image">
            {/* dimensions width{width}, height{height} */}
             <img
             	onLoad={this.onImgLoad} 
             	src={src}
             	//width="800" 
		    	alt=""
             />
           </div>
		);
	}
}