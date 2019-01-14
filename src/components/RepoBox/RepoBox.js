import React from 'react';
import './RepoBox.scss';
import moment from 'moment';
import {NavLink} from "react-router-dom";

const RepoBox = (props) => {
	const lastUpdate = moment(props.lastUpdate).fromNow();

	return (
		<div className="RepoBox">
			<NavLink to="/repo-detailed">
			<h3>{props.name}</h3>
		</NavLink>
			<div className="dived-badge">{props.devLang}</div>
			<p className="last-update">Last update: {lastUpdate}</p>
			{props.description !== null ? <p>{props.description}</p> : <p> no description :(</p>}
			<div className="RepoBox-Button" />
		</div>
	);
};

export default RepoBox;
