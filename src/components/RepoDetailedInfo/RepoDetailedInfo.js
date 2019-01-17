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
                    <div className="dates">
                        <div className="date">
                            Created at: {createdAt}
                        </div>
                        <div className="date">
                            Last update: {lastUpdate}
                        </div>
                    </div>
                    <div className="repo-name">
                        {props.reposInfo.name}
                    </div>
                    <div className="repo-detailed-info">
                        <div className="info">
                            Language: {props.reposInfo.language}
                        </div>
                        <div className="info">
                            Default branch: {props.reposInfo.default_branch}
                        </div>
                        <div className="info">
                            Subscribers: {props.reposInfo.subscribers_count}
                        </div>
                    </div>
                    <div className="repo-desc">
                        <div className="desc-header">
                            Description:
                        </div>
                        <div className="desc-body">
                            {props.reposInfo.description}
                        </div>
                    </div>
                    <div className="repo-actions">
                        <div className="action">
                            Git url {props.reposInfo.git_url}
                        </div>
                        <div className="action">
                            Ssh url {props.reposInfo.ssh_url}
                        </div>
                        <div className="action">
                            Clone url {props.reposInfo.clone_url}
                        </div>
                        <div className="action">
                            svn url {props.reposInfo.svn_url}
                        </div>
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