import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { Popover } from 'react-bootstrap';
import './Profile.scss';

class Profile extends Component {
	render() {
		const loading = this.props.gitstats.loading;
		const error = this.props.gitstats.error;

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

		const showPersonalInfo = () =>{
			return (
			<div style={{ height: 120 }}>
				<Popover
				  id="popover-basic"
				  placement="right"
				  positionLeft={200}
				  positionTop={50}
				  title="Popover right"
				>
				  And here's some <strong>amazing</strong> content. It's very engaging. right?
				</Popover>
			  </div>);
		}

		return (
			<div className="Profile">
				{this.props.gitstats.personalInfo.login ? (
					<div className="personal-data">
						<div>
							<Image
								src={`${this.props.gitstats.personalInfo.avatar_url}`}
								className="profil-image"
								onMouseEnter={() => showPersonalInfo()}
								onMouseLeave={() => console.log('leave')}
								circle
							/>
							<p className="username">
								<strong>{this.props.gitstats.personalInfo.login}</strong>
							</p>
							{/* <p>{this.props.gitstats.personalInfo.name}</p>
							<p>{this.props.gitstats.personalInfo.company}</p>
							<p>{this.props.gitstats.personalInfo.location}</p> */}
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
