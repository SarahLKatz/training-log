import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import styled, { css } from 'react-emotion';
import calendar from '../utils/calendar.js';
import swal from 'sweetalert2';

const Header = (props) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Sarah's Training App</h1>
    </header>
    {props.children}
  </div>
)

export default Header;