import React, { Component } from 'react';
import './RepoBox.scss';
import { fetchReposData } from '../../store/actions/reposInfoAction';
import { connect } from 'react-redux';

class RepoBox extends Component {
	componentDidMount() {
		this.props.dispatch(fetchReposData('devwichrowski'));
	}

	render() {
		return (
			<div className="RepoBox">
				{this.props.reposInfo.reposInfoArr.map((repo, index) =>{
					return(
					<div key={index}>
						<h3>{repo.name}</h3>
					</div>);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	reposInfo: state.reposInfo
});

export default connect(mapStateToProps, null)(RepoBox);
