import React from 'react';
import {connect} from "react-redux";
import './RepoDetailedInfo.scss';
import {Button, Glyphicon, Tooltip, OverlayTrigger} from "react-bootstrap";
import moment from "moment";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {NavLink} from "react-router-dom";

function RepoDetailedInfo(props) {
    const createdAt = moment(props.reposInfo.created_at).fromNow();
    const lastUpdate = moment(props.reposInfo.updated_at).fromNow();

    const tooltip = (
        <Tooltip id="tooltip">
            <strong>Copy to clipboard!</strong>
        </Tooltip>
    );

    return (
        <div className="RepoDetailedInfo">
            {props.reposInfo.name !== undefined ? (
                <div className="detailed-repo">
                    <div className="repo-buttons">
                        <a href={props.reposInfo.html_url}><Button bsStyle="primary">Visit on Github</Button></a>
                        <NavLink to="/">
                            <Button bsStyle="primary"> Go back </Button>
                        </NavLink>
                    </div>
                    <div className="main-info">
                        <div className="repo-name">
                            {props.reposInfo.name}
                        </div>
                        <div className="repo-desc">
                            <div className="desc-header">
                                Description:
                            </div>
                            <div className="desc-body">
                                {props.reposInfo.description}
                            </div>
                        </div>
                    </div>
                    <div className="dates">
                        <div className="date">
                            <div>
                                Created at:
                            </div>
                            <div>
                                {createdAt}
                            </div>
                        </div>
                        <div className="date">
                            <div>
                                Last update:
                            </div>
                            <div>
                                {lastUpdate}
                            </div>
                        </div>
                    </div>
                    <div className="repo-detailed-info">
                        <div className="info">
                            <div className="info-header">
                                Language:
                            </div>
                            <div>
                                {props.reposInfo.language}
                            </div>
                        </div>
                        <div className="info">
                            <div className="info-header">
                                Default branch:
                            </div>
                            <div>
                                {props.reposInfo.default_branch}
                            </div>
                        </div>
                        <div className="info">
                            <div className="info-header">
                                Subscribers:
                            </div>
                            <div>
                                {props.reposInfo.subscribers_count}
                            </div>
                        </div>
                    </div>
                    <div className="repo-actions">
                        <h2>Downloads</h2>
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <CopyToClipboard text={props.reposInfo.git_url}>
                                <div className="action">
                                    <div>
                                        GIT URL: {props.reposInfo.git_url}
                                    </div>
                                    <Glyphicon className="stats-icons"
                                               glyph="copy"/>
                                </div>
                            </CopyToClipboard>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <CopyToClipboard text={props.reposInfo.ssh_url}>
                                <div className="action">
                                    <div>
                                        SSH URL: {props.reposInfo.ssh_url}
                                    </div>
                                    <Glyphicon className="stats-icons"
                                               glyph="copy"/>
                                </div>
                            </CopyToClipboard>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <CopyToClipboard text={props.reposInfo.clone_url}>
                                <div className="action">
                                    <div>
                                        CLONE URL: {props.reposInfo.clone_url}
                                    </div>
                                    <Glyphicon className="stats-icons"
                                               glyph="copy"/>
                                </div>
                            </CopyToClipboard>
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={tooltip}>
                            <CopyToClipboard text={props.reposInfo.svn_url}>
                                <div className="action">
                                    <div>
                                        SVN URL: {props.reposInfo.svn_url}
                                    </div>

                                    <Glyphicon className="stats-icons"
                                               glyph="copy"/>
                                </div>
                            </CopyToClipboard>
                        </OverlayTrigger>
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