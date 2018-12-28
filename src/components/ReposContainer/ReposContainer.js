import React, { Component } from 'react';
import './ReposContainer.scss';
import RepoBox from '../RepoBox/RepoBox';

class ReposContainer extends Component {
	render() {
		return (
			<div className="ReposContainer">
				<p>repo container</p>
				<RepoBox />
			</div>
		);
	}
}

export default ReposContainer;
