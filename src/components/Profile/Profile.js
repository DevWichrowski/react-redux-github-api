import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Profile.scss';

class Profile extends Component {
	render() {
		const loading = this.props.gitstats.loading;
		const error = this.props.gitstats.error;

		if (error) {
			return <div>Error {error.message}</div>;
		}

		if (loading) {
			return <div> Loading... </div>;
		}

		return (
			<div className="Profile">
				{'Username: ' + this.props.gitstats.items.login}
				{'Full name: ' + this.props.gitstats.items.name}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	gitstats: state.gitstats
});

export default connect(mapStateToProps, null)(Profile);
