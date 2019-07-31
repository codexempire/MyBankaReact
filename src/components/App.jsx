/* eslint-disable import/no-cycle */
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './route';
import store from '../store/store';

function App() {
  // const username = 'michael';
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Routes />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
