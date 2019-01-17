import React from 'react';
import {connect} from "react-redux";
import './RepoDetailedInfo.scss';

function RepoDetailedInfo(props) {
    return (
        <div className="RepoDetailedInfo">
            <h1>Detailed Repo information</h1>
            <hr size="30"/>
            <div className="detailed-repo">
            <h2>{props.reposInfo.name}</h2>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    reposInfo: state.reposInfo.repoDetailedArr,
});

export default connect(mapStateToProps, null)(RepoDetailedInfo);