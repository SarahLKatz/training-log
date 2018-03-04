import React, { Component } from 'react';
import Header from './Header';
import Training from './Training';
import { logInStrava } from '../utils/strava.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      userId: '',
      name: 'Runner'
    }
  }

  connectWithStrava = (e) => {
    e.preventDefault()
    logInStrava();
    this.setState({userId: '1234', name: 'Sarah'})
  }

  render() {
    return (
      <Header name={this.state.name}>
      {
        this.state.userId ?
        <Training />
        :
        <button onClick={this.connectWithStrava}>Connect With Strava</button>
      }
      </Header>
    )
  }
}

export default App;
