import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  marginRight: '5px',
};

const LandingPage = () => (
  <>
    <header className="grid head">
      <div className="image" />
      <div className="container">
        <h1>
          <strong>M</strong>
          y
          <strong>B</strong>
          anka
        </h1>
        <p> A bank you can trust...</p>
        <Link to="/login" className="btn btn-purple" style={styles}>Login</Link>
        <Link to="/signup" className="btn btn-border-y">Signup</Link>
      </div>
    </header>
  </>
);

export default LandingPage;
