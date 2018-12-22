import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';
import GithubLogo from '../../assets/github-white.png';
import { saveUsername } from '../../store/actions/apiActions';
import { Button } from 'react-bootstrap';

class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
        searchInput: ''
    }
  }

  saveUserInState = (e) =>{
    this.setState({searchInput: e.target.value})
    console.log(this.state.searchInput)
  } 

  render() {
    return (
      <div className="Header">
      <a href="https://github.com/"><img className="logo" src={GithubLogo} /></a>
     <input className="search-input" onChange={this.saveUserInState}/>
     <Button bsStyle="primary" onClick={() => this.props.saveUserToStore({user: this.state.searchInput})}>Search</Button>
   </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
	saveUserToStore: (payload) => dispatch(saveUsername(payload)),
});

export default connect(null, mapDispatchToProps)(Header);