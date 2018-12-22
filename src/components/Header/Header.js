import React, { Component } from 'react';
import './Header.scss';
import GithubLogo from '../../assets/github-white.png';
import { Button } from 'react-bootstrap';

export default class Header extends Component {
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
     <Button bsStyle="primary">Search</Button>
   </div>
    )
  }
}
