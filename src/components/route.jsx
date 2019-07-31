/* eslint-disable import/no-cycle */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { User } from './Demo_Components';
import LandingPage from '../pages';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/user" component={User} />
  </Switch>
);

export default Routes;
