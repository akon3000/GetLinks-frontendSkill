import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './app';

const appElement = document.getElementById('app');

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;
    render(<NextApp />, appElement);
  });
}

render(<App />, appElement);