import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import PropType from 'prop-types';
import { signup } from '../../store/actions/auth';
import { checkLoggedUser } from '../../store/actions/common';

class SignupForm extends Component {
  state = {
    firstname: '', lastname: '', email: '', password: ''
  }
  componentDidMount = async () => {
    const { checkLoggedUser: loggedInUser, user} = this.props;
    await loggedInUser();
    if(user.type === 'user') {
      <Redirect to='/home' />
    }
  }
  handleChange = async event => {
    this.setState({ [event.target.name]: event.target.value });
    return;
  }
  signup = async event => {
    event.preventDefault();
    await this.props.signup({ ...this.state });
    return;
  }
  handleServerResponse = () => {
    const { user, error } = this.props;
    if (error === '' && user.firstname) {
      return <Redirect to='/home' />
    }
    if (error === '') {
      return <div></div>;
    }
    return <div className='alert alert-danger text-center'>{error}</div>;
  }
  render = () => {
    return (
      <>
        <div className="form-card">
          <h3>SIGNUP</h3>
          <form onSubmit={this.signup}>
            <>{this.handleServerResponse()}</>
            <div id="input-half">
              <label htmlFor='firstName'>Firstname</label>
              <div className="form-group">
                <input type="text" className="form-control" name="firstname" id="firstName" onChange={this.handleChange} />
              </div>
            </div>
            <div id="input-half">
              <label htmlFor='lastName'>Lastname</label>
              <div className="form-group">
                <input type="text" className="form-control" name="lastname" id="lastName" onChange={this.handleChange} />
              </div>
            </div>
            <label htmlFor='email'>Email</label>
            <div className="form-group">
              <input type="email" className="form-control" name="email" id="email" onChange={this.handleChange} />
            </div>
            <label htmlFor='password'>Password</label>
            <div className="form-group">
              <input type="password" className="form-control" name="password" id="password" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-green" id="signup">Create</button>
            </div>
          </form>
        </div>
        <p className="tip">Already registered <Link to="/login">Log in</Link></p>
      </>
    );
  }
}

SignupForm.PropType = {
  user: PropType.object.isRequired,
  error: PropType.string.isRequired,
  signup: PropType.func.isRequired,
  checkLoggedUser: PropType.func.isRequired
}
const mapStateToProps = state => ({
  user: state.auth.user,
  error: state.auth.error
});
const mapDispatchToProps = {
  signup,
  checkLoggedUser
}
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
