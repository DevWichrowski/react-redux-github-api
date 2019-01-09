import React, { Component } from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import ReposContainer from '../ReposContainer/ReposContainer';
import FollowersContainer from '../Followers/FollowersContainer/FollowersContainer';
import { BrowserRouter, Route } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="Main">
					<Header />
					<Profile />
					<Route exact path="/" component={ReposContainer} />
					<Route path="/followers" component={FollowersContainer} />
				</div>
			</BrowserRouter>
		);
	}
}

export default Main;
