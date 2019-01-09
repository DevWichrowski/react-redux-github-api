import React, { Component } from 'react';
import './FollowersContainer.scss';
import FollowersBox from '../FollowersBox/FollowersBox';

export default class FollowersContainer extends Component {
	render() {
		return (
			<div clasName="FollowersContainer">
				<h1>Follwoers Container</h1>
                <FollowersBox />
			</div>
		);
	}
}
