import React, { Component } from 'react';
import './Followers.scss';
import User from '../User/User';
import { connect } from 'react-redux';

class Followers extends Component {
	render() {
		const followersApi = this.props.followersInfo;
		return (
			<div className="Followers">
				<h1>Followers</h1>
				<div className="followers-flex">
					{followersApi.map((followers, index) => {
						return (
							<User key={index} login={followers.login} avatar={followers.avatar_url} profile={followers.html_url} />
						);
					})}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	followersInfo: state.followersInfo.followersInfoArr
});
export default connect(mapStateToProps, null)(Followers);
