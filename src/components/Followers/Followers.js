import React, { Component } from 'react';
import './Followers.scss';
import User from '../User/User';
import { connect } from 'react-redux';

class Followers extends Component {
	render() {
		const followersApi = this.props.followersInfo.followersInfoArr;
		return (
			<div className="Followers">
			<h1>Followers</h1>
				{followersApi.map((followers, index) => {
					return (
						<div key={index}>
							<User />
						</div>
					);
				})}
			</div>
		);
	}
}

// export default connect(mapStateToProps, null)(ReposContainer);
const mapStateToProps = (state) => ({
	followersInfo: state.followersInfo
});
export default connect(mapStateToProps, null)(Followers);
