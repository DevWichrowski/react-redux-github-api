import React from 'react';
import {connect} from "react-redux";
import './RepoDetailedInfo.scss';

function RepoDetailedInfo(props) {
    return (
        <div className="RepoDetailedInfo">
            {props.reposInfo.name !== undefined ? (
                <div className="detailed-repo">
                    <h2>{props.reposInfo.name}</h2>
                    <hr size="30"/>
                    <p>go visist {props.reposInfo.html_url}</p>
                    <p>description: {props.reposInfo.description}</p>
                    <p>default branch {props.reposInfo.default_branch}</p>
                    <p>git url {props.reposInfo.git_url}</p>
                    <p>ssh url {props.reposInfo.ssh_url}</p>
                    <p>clone url {props.reposInfo.clone_url}</p>
                    <p>svn url {props.reposInfo.svn_url}</p>
                    <p>subscribers: {props.reposInfo.subscribers_count}</p>
                    <p>created at: {props.reposInfo.created_at}</p>
                    <p>Last update: {props.reposInfo.updated_at}</p>
                    <p>Language: {props.reposInfo.language}</p>
                </div>
            ) : <h1>Loading...</h1>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    reposInfo: state.reposInfo.repoDetailedArr,
});

export default connect(mapStateToProps, null)(RepoDetailedInfo);