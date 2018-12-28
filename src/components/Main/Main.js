import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import ReposContainer from '../ReposContainer/ReposContainer';


class Main extends Component {
	render() {
		return (
			<div className="Main">
				<Header />
				<Profile />
				<ReposContainer />
				<Footer />
			</div>
		);
	}
}

export default Main;