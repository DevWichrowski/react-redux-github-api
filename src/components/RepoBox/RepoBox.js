import React from 'react';
import './RepoBox.scss';
import moment from 'moment';

const RepoBox = (props) => {
	const lastUpdate = moment(props.lastUpdate).fromNow();

	return (
		<div className="RepoBox">
			<h3>{props.name}</h3>
			<div className="dived-badge">{props.devLang}</div>
			<p className="last-update">Last update: {lastUpdate}</p>
			{props.description !== null ? <p>{props.description}</p> : <p> no description :(</p>}
			<div className="RepoBox-Button" />
		</div>
	);
};

export default RepoBox;
