import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Routes from './components/routes';
import { store } from './store/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}
