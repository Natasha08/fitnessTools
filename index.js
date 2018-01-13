import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

import rootReducer from './src/reducers/index';
import Home from './src/pages/home';
import AppWithNavigationState from './src/app';

const store = createStore(rootReducer);

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

export default Root;
AppRegistry.registerComponent('fitnessTools', () => Root);
