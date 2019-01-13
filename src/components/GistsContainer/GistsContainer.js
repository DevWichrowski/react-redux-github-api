import React from 'react';
import {connect} from "react-redux";
import './GistsContainer.scss';
import Gists from "../Gists/Gists";

function GistsContainer(props) {
    const gistsData = props.gistsInfo;
    return (
        <div>
            <h1>GistsContainer</h1>
            {gistsData.map((gists, index) => {
                return (
                    <Gists/>
                );
            })}
        </div>
    );
}

const mapStateToProps = (state) => ({
    gistsInfo: state.gistsInfo.gistsInfoArr
});

export default connect(mapStateToProps, null)(GistsContainer);
