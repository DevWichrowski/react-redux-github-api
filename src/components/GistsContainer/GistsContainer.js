import React from 'react';
import {connect} from "react-redux";
import './GistsContainer.scss';
import Gist from "../Gist/Gist";

function GistsContainer(props) {
    const gistsData = props.gistsInfo;

    const getFilename = (arr) => {
        for (const x in arr.files) {
            return x;
        }
    }

    return (
        <div>
            {gistsData.length !== 0 ? (
                <>
                    {gistsData.map((gists, index) => {
                        return (
                            <div key={index}>
                                <Gist name={getFilename(gists)} htmlUrl={gists.html_url} description={gists.description} createdAt={gists.created_at}/>
                            </div>
                        )
                    })}
                </>
            ) : <h1> No Gists here :(</h1>}

        </div>
    );
}

const mapStateToProps = (state) => ({
    gistsInfo: state.gistsInfo.gistsInfoArr
});

export default connect(mapStateToProps, null)(GistsContainer);
