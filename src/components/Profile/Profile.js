import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import './Profile.scss';

class Profile extends Component {
	render() {
		const loading = this.props.gitstats.loading;
		const error = this.props.gitstats.error;

		if (error) {
			return <div>Error {error.message}</div>;
		}

		if (loading) {
			return <div> <h2>Loading... </h2></div>;
		}

		return (
			<div className="Profile">
				{this.props.gitstats.items.login ? (
					<div className="personal-data">
						<div>
							<Image src={`${this.props.gitstats.items.avatar_url}`} className="profil-image" circle />
							<p className="full-name">{this.props.gitstats.items.login}</p>
						</div>
						<div>
							{/* <p>{this.props.gitstats.items.name}</p>
							<p>{this.props.gitstats.items.company}</p>
							<p>{this.props.gitstats.items.location}</p> */}
						</div>
					</div>
				) : (
					<div>
						<h2>Search for user</h2>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	gitstats: state.gitstats
});

export default connect(mapStateToProps, null)(Profile);
