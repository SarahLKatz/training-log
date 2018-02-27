import React, { Component } from 'react';

import Header from './Header'
import Training from './Training'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userId: '1234'
    }
  }

  render() {
    return (
      <Header>
      {
        this.state.userId ? 
        <Training />
        :
        <h1>Hello World</h1>
      }
      </Header>
    )
  }
}

export default App;
