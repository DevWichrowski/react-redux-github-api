import React from 'react';
import './Gist.scss';
import { Button } from 'react-bootstrap';
import moment from 'moment';

const Gist = (props) => {
    const createdAt = moment(props.createdAt).format('Do MMM YYYY');
    
	return (
		<div className="Gist">
			<h4>{props.name}</h4>
			<p>Created at: {createdAt}</p>
			{props.description !== '' ? <p>{props.description}</p> : <p>no description</p>}
			<a className="pulls" href={props.htmlUrl}>
				<Button bsStyle="link"> Check on Github </Button>{' '}
			</a>
		</div>
	);
};

export default Gist;
