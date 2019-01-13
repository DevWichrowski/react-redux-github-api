import React from 'react';
import {connect} from "react-redux";
import './GistsContainer.scss';
import Gists from "../Gists/Gists";

function GistsContainer(props) {
    const gistsData = props.gistsInfo;

    const getFilename = (arr) =>{
        for (const x in arr.files){
            return x;
        }
    }

    return (
        <div>
            <h1>GistsContainer</h1>
            {gistsData.map((gists, index) => {
                return (
                    <div key={index}>
                    <Gists name={getFilename(gists)}/>
                    </div>
                )
            })}
        </div>
    );
}

const mapStateToProps = (state) => ({
    gistsInfo: state.gistsInfo.gistsInfoArr
});

export default connect(mapStateToProps, null)(GistsContainer);
