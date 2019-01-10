import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import GithubLogo from '../../assets/github-white.png';
import { Button } from 'react-bootstrap';
import { getPersonalInfo } from '../../store/actions/personalInfoActions';
import { getFollowersInfo } from '../../store/actions/followersInfoAction';
import { getRepos } from '../../store/actions/reposInfoAction';
import { saveUsername } from '../../store/actions/personalInfoActions';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ''
		};
	}

	// componentDidMount() {
	// this.props.dispatch(getPersonalInfo('DevWichrowski'));
	// this.props.dispatch(getRepos('DevWichrowski'));
	// this.props.dispatch(getFollowersInfo('DevWichrowski'));
	// }

	saveUserInState = (e) => {
		this.setState({ username: e.target.value });
		console.log(this.state.username);
	};

	render() {
		return (
			<div className="Header">
				<a href="https://github.com/">
					<img className="logo" src={GithubLogo} />
				</a>
				<input className="search-input" onChange={this.saveUserInState} />
				<Button
					bsStyle="primary"
					onClick={() => {
						this.props.saveUserToStore(this.state.username);
						this.props.searchForUser(this.state.username);
					}}
				>
					Search
				</Button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	saveUserToStore: (payload) => dispatch(saveUsername(payload)),
	searchForUser: (payload) => dispatch(getPersonalInfo(payload))
});

const mapStateToProps = (state) => ({
	personalInfo: state.personalInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
