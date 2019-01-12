import React from 'react';
import { Image } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './User.scss';

export default function User(props) {
	return (
		<div className="User">
				<Image src={`${props.avatar}`} className="profil-image" circle />
				{props.login !== null ? <p>{props.login}</p> : null}
                {props.profile !== null ? <a href={props.profile}><Button bsStyle="primary">Visit on Github</Button></a> : null}
		</div>
	);
}
