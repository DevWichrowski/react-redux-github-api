import React, { Component } from 'react';
import './RepoBox.scss';
import { Badge } from 'react-bootstrap';

class RepoBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="RepoBox">
				<h3>{this.props.name}</h3>
				<p>{this.props.description}</p>
				<Badge>{this.props.devLang}</Badge>
			</div>
		);
	}
}

export default RepoBox;
