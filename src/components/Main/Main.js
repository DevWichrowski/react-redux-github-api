import React, { Component } from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import ReposContainer from '../ReposContainer/ReposContainer';
import Followers from '../Followers/Followers';
import { BrowserRouter, Route } from 'react-router-dom';

class Main extends Component {
	render() {
		return (
			<BrowserRouter>
				<div className="Main">
					<Header />
					<Profile />
					<Route exact path="/" component={ReposContainer} />
					<Route path="/followers" component={Followers} />
				</div>
			</BrowserRouter>
		);
	}
}

export default Main;
