import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <Fragment>
    <h1>Hi React</h1>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/user">Users</Link></li>
    </ul>
  </Fragment>
);

export default Header;
