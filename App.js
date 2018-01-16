import React, { Component } from 'react';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';

import rootReducer from './src/reducers/index';
import Home from './src/pages/home';
import AppWithNavigationState from './src/app';

const store = createStore(
  rootReducer,
  undefined,
  compose(applyMiddleware(thunk))
);

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
