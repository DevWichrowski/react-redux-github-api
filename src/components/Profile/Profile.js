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
		const loading = this.props.gitstats.loading;
		const error = this.props.gitstats.error;

		const personalPopoverr = (
			<div>
				<Popover
					id="popover-basic"
					placement="right"
					positionLeft={80}
					positionTop={40}
					title="Personal information"
				>
					<p>{this.props.gitstats.personalInfo.name}</p>
					<p>{this.props.gitstats.personalInfo.company}</p>
					<p>{this.props.gitstats.personalInfo.location}</p>
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
				{this.props.gitstats.personalInfo.login ? (
					<div className="personal-data">
						<div>
							<Image
								src={`${this.props.gitstats.personalInfo.avatar_url}`}
								className="profil-image"
								onClick={() => this.togglePersonalPopover()}
								circle
							/>

							{this.state.personalPopoverVisible ? personalPopoverr : null}
							<p className="username">
								<strong>
									<a href={this.props.gitstats.personalInfo.html_url}>
										{this.props.gitstats.personalInfo.login}
									</a>
								</strong>
							</p>
						</div>
						<div>
							<p>
								<Glyphicon glyph="user" />Followers {this.props.gitstats.personalInfo.followers}
							</p>
							<p>
								<Glyphicon glyph="user" />Following {this.props.gitstats.personalInfo.following}
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
	gitstats: state.gitstats
});

export default connect(mapStateToProps, null)(Profile);
