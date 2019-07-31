import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export function User(props) {
  const { username } = props;

  const button = () => (
    <Link to="/">
      <button type="button" className="homeButton">
        To Home
      </button>
    </Link>
  );
  if (username !== '') {
    return (
      <React.Fragment>
        <div className="user logged">
          Welcome to the users route
          {' '}
          {username}
        </div>
        {button()}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="user unlogged">This is the user route</div>
      {button()}
    </React.Fragment>
  );
}
User.propTypes = {
  username: PropTypes.string,
};

User.defaultProps = {
  username: '',
};
export function Home() {
  return (
    <React.Fragment>
      <div className="home">Here is the home route</div>
    </React.Fragment>
  );
}
