/* eslint-disable import/no-cycle */
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { User, Home } from './Demo_Components';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/user" component={User} />
  </Switch>
);

export default Routes;
