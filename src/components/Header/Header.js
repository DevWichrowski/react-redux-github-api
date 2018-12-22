import React from 'react'
import './Header.scss';
import GithubLogo from '../../assets/github-white.png';
import { Button } from 'react-bootstrap';

export default function Header() {
  return (
    <div className="Header">
       <a href="https://github.com/"><img className="logo" src={GithubLogo} /></a>
      <input className="search-input"/>
      <Button bsStyle="primary">Search</Button>
    </div>
  )
}
