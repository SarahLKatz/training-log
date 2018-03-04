import React from 'react';
import logo from '../logo.svg';
import '../App.css';

const Header = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">{props.name}'s Training App</h1>
    </header>
    {props.children}
  </div>
)

export default Header;
