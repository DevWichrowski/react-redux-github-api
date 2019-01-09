import React, { Component } from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import ReposContainer from '../ReposContainer/ReposContainer';


class Main extends Component {
	render() {
		return (
			<div className="Main">
				<Header />
				<Profile />
				<ReposContainer />
			</div>
		);
	}
}

export default Main;