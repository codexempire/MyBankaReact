import {
  SIGNED_SUCCESS,
  AUTH_ERROR,
  INIT_AUTH_REQUEST,
  END_AUTH_REQUEST,
} from './actionTypes';
import axios from '../../utils/http';
import decodeToken from './decodeToken';

export const signup = (body) => async dispatch => {
  try {
    const response = await axios.post('/auth/signup', body);
    const { data } = response.data;
    localStorage.setItem('token', data.token);
    const userData = await decodeToken(data.token);
    dispatch({ type: SIGNED_SUCCESS, payload: userData });
  } catch (error) {
    const err =
      (typeof error.response !== 'undefined'
        ? error.response.data.error.replace(/[""]/g, '').split(':', 1)
        : error.message);
    dispatch({ type: AUTH_ERROR, payload: err });
  }
}

export const login = (body) => async dispatch => {
  try {
    const response = await axios.post('/auth/signin', body);
    const {
      data
    } = response.data;
    localStorage.setItem('token', data.token);
    const userData = await decodeToken(data.token);
    dispatch({
      type: SIGNED_SUCCESS,
      payload: userData
    });
  } catch (error) {
    const err =
      (typeof error.response !== 'undefined' ?
        error.response.data.error.replace(/[""]/g, '').split(':', 1) :
        error.message);
    dispatch({
      type: AUTH_ERROR,
      payload: err
    });
  }
}

export const Loading = () => {
  return {
    type: INIT_AUTH_REQUEST,
  }
}

export const hasLoaded = () => {
  return {
    type: END_AUTH_REQUEST,
  }
}
