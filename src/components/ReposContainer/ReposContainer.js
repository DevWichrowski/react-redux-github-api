import React, { Component } from 'react';
import './ReposContainer.scss';
import RepoBox from '../RepoBox/RepoBox';
import { fetchReposData } from '../../store/actions/reposInfoAction';
import { connect } from 'react-redux';


class ReposContainer extends Component {
	componentDidMount() {
		this.props.dispatch(fetchReposData('devwichrowski'));
	}

	render() {
		return (
			<div className="ReposContainer">
				{this.props.reposInfo.reposInfoArr.map((repo, index) =>{
					return(
					<div key={index}>
						<RepoBox />
					</div>);
				})}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	reposInfo: state.reposInfo
});

export default connect(mapStateToProps, null)(ReposContainer);
