import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import GithubLogo from '../../assets/github-white.png';
import { Button } from 'react-bootstrap';
import { getPersonalInfo } from '../../store/actions/personalInfoActions';
import { getRepos } from '../../store/actions/reposInfoAction';
import { saveUsername } from '../../store/actions/personalInfoActions';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ''
		};
	}

	saveUserInState = (e) => {
		this.setState({ username: e.target.value });
	};

	render() {
		return (
			<div className="Header">
				<a href="https://github.com/">
					<img className="logo" src={GithubLogo} alt=""/>
				</a>
				<input className="search-input" onChange={this.saveUserInState} />
				<Button
					bsStyle="primary"
					onClick={() => {
						this.props.saveUserToStore('devwichrowski');
						this.props.searchForUser('devwichrowski');
						this.props.getReposInfo('devwichrowski');
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
	searchForUser: (payload) => dispatch(getPersonalInfo(payload)),
	getReposInfo: (payload) => dispatch(getRepos(payload)),
});

const mapStateToProps = (state) => ({
	personalInfo: state.personalInfo,
	reposInfo: state.reposInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
