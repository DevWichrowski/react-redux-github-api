import React, { Component } from 'react';
import './ReposContainer.scss';
import RepoBox from '../RepoBox/RepoBox';
import { getRepos } from '../../store/actions/reposInfoAction';
import { connect } from 'react-redux';


class ReposContainer extends Component {
	componentDidMount() {
		// this.props.dispatch(fetchReposData('devwichrowski'));
		this.props.dispatch(getRepos('devwichrowski'));
	}

	render() {
		return (
			<div className="ReposContainer">
				{this.props.reposInfo.reposInfoArr.map((repo, index) =>{
					return(
					<div key={index}>
						<RepoBox name={repo.name} description={repo.description} devLang={repo.language} lastUpdate={repo.updated_at}/>
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
