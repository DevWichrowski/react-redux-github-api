import React from 'react';
import './Following.scss';
import User from '../User/User';
import { connect } from 'react-redux';

function Following(props) {
	const followingApi = props.followingInfo;
	return (
		<div className="Followers">
			<h1>Following</h1>
			<div className="followers-flex">
			{followingApi.map((following, index) => {
				return (
						<User login={following.login} avatar={following.avatar_url} profile={following.html_url} />
				);
			})}
			</div>
		</div>
	);
}

const mapStateToProps = (state) => ({
	followingInfo: state.followersInfo.followingInfoArr
});
export default connect(mapStateToProps, null)(Following);
