import React, { Component } from 'react';
import './Following.scss';
import User from '../User/User';
import { connect } from 'react-redux';

function Following(props) {
    const followingApi = props.followingInfo;
    console.log(followingApi);
    return (
        <div className="Followers">
            <h1>Following</h1>
            {followingApi.map((following, index) => {
                
                return (
                    <div key={index}>
                        <User login={following.login} avatar={following.avatar_url} profile={following.html_url} />
                    </div>
                );
            })}
        </div>
  )
}

const mapStateToProps = (state) => ({
	followingInfo: state.followersInfo.followingInfoArr
});
export default connect(mapStateToProps, null)(Following);