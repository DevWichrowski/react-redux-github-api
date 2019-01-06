import React, { Component } from 'react';
import './RepoBox.scss';

class RepoBox extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="RepoBox">
				<h3>{this.props.name}</h3>
				<div className='dived-badge'>{this.props.devLang}</div>
					{this.props.description !== null ? <p>{this.props.description}</p> : <p> no description :(</p> }
				<div className="RepoBox-Button">
				</div>
			</div>
		);
	}
}

export default RepoBox;
