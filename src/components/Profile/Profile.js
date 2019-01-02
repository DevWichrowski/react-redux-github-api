import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import './Profile.scss';

class Profile extends Component {
	constructor(props) {
		super(props);

		this.state = {
			personalPopoverVisible: false
		};
	}

	togglePersonalPopover = () => {
		this.setState({ personalPopoverVisible: !this.state.personalPopoverVisible });
	};

	render() {
		const loading = this.props.personalInfo.loading;
		const error = this.props.personalInfo.error;
		const personalData = this.props.personalInfo.personalInfoArr;
		const personalPopoverr = (
			<div>
				<Popover
					id="popover-basic"
					placement="right"
					positionLeft={80}
					positionTop={40}
					title="Personal information"
				>
					{personalData.name !== null ? (
						<p>
							<Glyphicon className="stats-icons" glyph="user" />
							{personalData.name}
						</p>
					) : null}
					{personalData.company !== null ? (
						<p>
							<Glyphicon className="stats-icons" glyph="lock" />
							{personalData.company}
						</p>
					) : null}
					{personalData.location !== null ? (
						<p>
							<Glyphicon className="stats-icons" glyph="map-marker" />
							{personalData.location}
						</p>
					) : null}
					{personalData.email !== null ? (
						<p>
							<Glyphicon className="stats-icons" glyph="envelope" />
							{personalData.email}
						</p>
					) : null}
				</Popover>
			</div>
		);

		if (error) {
			return <div>Error {error.message}</div>;
		}

		if (loading) {
			return (
				<div>
					{' '}
					<h2>Loading... </h2>
				</div>
			);
		}

		return (
			<div className="Profile">
				{personalData.login ? (
					<div className="personal-data">
						<div className="user-image">
							<Image
								src={`${personalData.avatar_url}`}
								className="profil-image"
								onClick={() => this.togglePersonalPopover()}
								circle
							/>

							{this.state.personalPopoverVisible ? personalPopoverr : null}
							<p className="username">
								<strong>
									<a href={personalData.html_url}>
										{personalData.login}
									</a>
								</strong>
							</p>
						</div>
						<div className="follows">
							<p>
								<Glyphicon className="stats-icons" glyph="chevron-down" />Followers{' '}
								{personalData.followers}
							</p>
							<p>
								<Glyphicon className="stats-icons" glyph="chevron-up" />Following{' '}
								{personalData.following}
							</p>
							<p>
								<Glyphicon className="stats-icons" glyph="th-large" />Repos{' '}
								{personalData.public_repos}
							</p>
							<p>
								<Glyphicon className="stats-icons" glyph="list-alt" />Gits{' '}
								{personalData.public_gists}
							</p>
							<p>
								<Glyphicon className="stats-icons" glyph="star" />Starred repos{' '}
								{personalData.public_gists}
							</p>
						</div>
					</div>
				
				) : (
					<div>
						<h2>Search for user</h2>
					</div>
				)}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	personalInfo: state.personalInfo
});

export default connect(mapStateToProps, null)(Profile);
