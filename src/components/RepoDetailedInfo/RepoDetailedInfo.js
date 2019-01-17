import React from 'react';
import {connect} from "react-redux";
import './RepoDetailedInfo.scss';
import {Button} from "react-bootstrap";
import moment from "moment";

function RepoDetailedInfo(props) {
    const createdAt = moment(props.reposInfo.created_at).fromNow();
    const lastUpdate = moment(props.reposInfo.updated_at).fromNow();

    return (
        <div className="RepoDetailedInfo">
            {props.reposInfo.name !== undefined ? (
                <div className="detailed-repo">
                    <h2>{props.reposInfo.name}</h2>
                    <hr size="30"/>
                    <div className="repo-dates">
                        <p>Created at: {createdAt}</p>
                        <p>Last update: {lastUpdate}</p>
                    </div>
                    <div className="repo-lang">
                        <p>Language: {props.reposInfo.language}</p>
                        <p>default branch {props.reposInfo.default_branch}</p>
                        <p>subscribers: {props.reposInfo.subscribers_count}</p>
                    </div>

                    <p>description: {props.reposInfo.description}</p>

                    <div clasName="github-buttons">
                        <p>git url {props.reposInfo.git_url}</p>
                        <p>ssh url {props.reposInfo.ssh_url}</p>
                        <p>clone url {props.reposInfo.clone_url}</p>
                        <p>svn url {props.reposInfo.svn_url}</p>
                    </div>
                    <div className="detailed-navs-button">
                        <Button bsStyle="success"><a href={props.reposInfo.html_url}>Visit on Github</a></Button>
                        <Button bsStyle="primary"> Go back </Button>
                    </div>
                </div>
            ) : <h1>Loading...</h1>}
        </div>
    );
}

const mapStateToProps = (state) => ({
    reposInfo: state.reposInfo.repoDetailedArr,
});

export default connect(mapStateToProps, null)(RepoDetailedInfo);