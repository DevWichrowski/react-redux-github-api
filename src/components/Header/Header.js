import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import GithubLogo from '../../assets/github-white.png';
import { saveUsername } from '../../store/actions/personalInfoActions';
import { Button } from 'react-bootstrap';
import { fetchPersonalData, getUser} from '../../store/actions/personalInfoActions';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: ''
		};
	}

	componentDidMount() {
		this.props.dispatch(fetchPersonalData('devwichrowski'));
		// this.props.dispatch(getUser('DamianBusz'));
	}
	searchForUser = () => {
		console.log('Username' + this.state.username);
		this.props.dispatch(fetchPersonalData(this.state.username));
	};

	saveUserInState = (e) => {
		this.setState({ username: e.target.value });
		// console.log(this.state.username);
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
						this.searchForUser();
					}}
				>
					Search
				</Button>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	saveUserToStore: (payload) => dispatch(saveUsername(payload))
});

const mapStateToProps = (state) => ({
	personalInfo: state.personalInfo,
});

export default connect(mapStateToProps, null)(Header);
