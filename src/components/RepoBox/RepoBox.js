import React, { Component } from 'react';
import './RepoBox.scss';

class RepoBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="RepoBox">
				<p>{this.props.name}</p>
				<p>{this.props.description}</p>
				<p>{this.props.devLang}</p>
			</div>
		);
	}
}

export default RepoBox;
