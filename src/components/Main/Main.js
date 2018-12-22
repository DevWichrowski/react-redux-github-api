import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';


class Main extends Component {
	render() {
		return (
			<div className="Main">
				<Header />
				<Profile />
				<Footer />
			</div>
		);
	}
}

export default Main;