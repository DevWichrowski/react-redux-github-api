import React from 'react'
import './Header.scss';
import GithubLogo from '../../assets/github-white.png';

export default function Header() {
  return (
    <div className="Header">
       <a href="https://github.com/"><img className="logo" src={GithubLogo} /></a>
    </div>
  )
}
