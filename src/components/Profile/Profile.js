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
			return <div> Loading... </div>;
		}

		return (
			<div className="Profile">
				{this.props.gitstats.items.login ? (
					<div>
						<p>{'Username: ' + this.props.gitstats.items.login}</p>
						<p>{'Full name: ' + this.props.gitstats.items.name}</p>
						<p>
							<Image src={`${this.props.gitstats.items.avatar_url}`} circle />
						</p>
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
