import React, {Component} from 'react';
import './ReposContainer.scss';
import RepoBox from '../RepoBox/RepoBox';
import {connect} from 'react-redux';


class ReposContainer extends Component {
    render() {
        const reposFromApi = this.props.reposInfo.reposInfoArr;

        const sortRepos = (repo) => {
            repo.sort(function compare(a, b) {
                const dateOne = new Date(a.updated_at);
                const dateTwo = new Date(b.updated_at);
                return dateTwo - dateOne;
            })
        };

        return (
            <div className="ReposContainer">
                {sortRepos(reposFromApi)}
                {reposFromApi.map((repo, index) => {
                    if(repo.name === 'undefined.github.io'){
                        return null;
                    }
                    
                    return (
                        <div key={index}>
                            <RepoBox name={repo.name} description={repo.description} devLang={repo.language}
                                     lastUpdate={repo.updated_at}/>
                        </div>);
                })}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    reposInfo: state.reposInfo,
    personalInfo: state.personalInfo
});

export default connect(mapStateToProps, null)(ReposContainer);
