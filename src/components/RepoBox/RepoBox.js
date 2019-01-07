import React, { Component } from 'react';
import './RepoBox.scss';
import moment from 'moment';

class RepoBox extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const lastUpdate = moment(this.props.lastUpdate).fromNow();
		// console.log(moment(lastUpdate).fromNow());

		return (
			<div className="RepoBox">
				<h3>{this.props.name}</h3>
				<div className="dived-badge">{this.props.devLang}</div>
					<p className="last-update">Last update: {lastUpdate}</p>
					{this.props.description !== null ? <p>{this.props.description}</p> : <p> no description :(</p> }
				<div className="RepoBox-Button">
				</div>
			</div>
		);
	}
}

export default RepoBox;
