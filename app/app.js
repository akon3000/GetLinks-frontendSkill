import React, { Component } from 'react';
import Home from './container/Home';

import './scss/global.scss';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Home />
    )
  }
}

export default App;