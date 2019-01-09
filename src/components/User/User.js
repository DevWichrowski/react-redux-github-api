import React from 'react';
import { Image } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import './User.scss';

export default function User(props) {
	return (
		<div className="User">
			<div className="image-left">
				<Image src={`${props.avatar}`} className="profil-image" circle />
			</div>
			<div className="infos-right">
				{props.login !== null ? <p>{props.login}</p> : null}
                {props.profile !== null ? <p>{props.profile}</p> : null}
			</div>
		</div>
	);
}
