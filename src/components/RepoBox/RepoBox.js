import React, { Component } from 'react';
import './RepoBox.scss';

class RepoBox extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const currentdate = new Date(); 
	const datetime = "Last Sync: " + currentdate.getDate() + "/"
					+ (currentdate.getMonth()+1)  + "/" 
					+ currentdate.getFullYear() + " @ "  
					+ currentdate.getHours() + ":"  
					+ currentdate.getMinutes() + ":" 
					+ currentdate.getSeconds();
		return (
			<div className="RepoBox">
				<h3>{this.props.name}</h3>
				<div className='dived-badge'>{this.props.devLang}</div>
					{this.props.description !== null ? <p>{this.props.description}</p> : <p> no description :(</p> }
				<div className="RepoBox-Button">
				<p>{datetime}</p>
				{/* <div className="dived-badge">Clone</div>
				<div className="dived-badge">Visit</div> */}
				</div>
			</div>
		);
	}
}

export default RepoBox;
