import React, {Component} from 'react';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import ReposContainer from '../ReposContainer/ReposContainer';
import Followers from '../Followers/Followers';
import {BrowserRouter, Route} from 'react-router-dom';
import Following from '../Following/Following';
import GistsContainer from "../GistsContainer/GistsContainer";
import RepoDetailedInfo from "../RepoDetailedInfo/RepoDetailedInfo";

class Main extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="Main">
                    <Header/>
                    <Profile/>
                    <Route exact path="/" component={ReposContainer}/>
                    <Route path="/followers" component={Followers}/>
                    <Route path="/following" component={Following}/>
                    <Route path="/gits" component={GistsContainer}/>
                    <Route path="/repo-detailed" component={RepoDetailedInfo}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Main;
