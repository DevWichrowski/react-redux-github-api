import React from 'react';
import './RepoBox.scss';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveRepoName } from '../../store/actions/reposInfoAction';
import { getDetailedRepo } from '../../store/actions/reposInfoAction';

const RepoBox = (props) => {
	const lastUpdate = moment(props.lastUpdate).fromNow();

	return (
		<div className="RepoBox">
			<NavLink to="/repo-detailed">
				<h3 onClick={() => {
						props.saveRepoName(props.name);
						props.getDetailedRepo({ username: 'devwichrowski', reponame: props.name });
					}}>
					{props.name}
				</h3>
			</NavLink>
			<div className="dived-badge">{props.devLang}</div>
			<p className="last-update">Last update: {lastUpdate}</p>
			{props.description !== null ? <p>{props.description}</p> : <p> no description :(</p>}
			<div className="RepoBox-Button" />
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	saveRepoName: (payload) => dispatch(saveRepoName(payload)),
	getDetailedRepo: (payload) => dispatch(getDetailedRepo(payload))
});

const mapStateToProps = (state) => ({
	personalInfo: state.personalInfo
});

export default connect(mapStateToProps, mapDispatchToProps)(RepoBox);
