import React from 'react';
import './RepoBox.scss';
import moment from 'moment';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {saveRepoName} from '../../store/actions/reposInfoAction';
import {getDetailedRepo} from '../../store/actions/reposInfoAction';
import {Button} from "react-bootstrap";

const RepoBox = (props) => {
    const lastUpdate = moment(props.lastUpdate).fromNow();

    return (
        <div className="RepoBox">
            <h3>{props.name}</h3>
            <div className="dived-badge">{props.devLang}</div>
            <p className="last-update">Last update: {lastUpdate}</p>
            {props.description !== null ? <p>{props.description}</p> : <p> no description :(</p>}
            <NavLink to="/repo-detailed">
                <div className="repo-button">
                    <a href={props.profile}><Button bsStyle="primary" onClick={() => {
                        props.saveRepoName(props.name);
                        props.getDetailedRepo({username: props.personalInfo.username, reponame: props.name});
                    }}>Go to details</Button></a>
                </div>
            </NavLink>
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
