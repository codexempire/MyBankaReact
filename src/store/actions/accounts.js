import {
  CREATE_ACCOUNT,
  CREATE_ACCOUNT_ERROR,
  GET_ACCOUNT,
  GET_ACCOUNT_ERROR,
  LOG_OUT
} from './actionTypes';
import axios from '../../utils/http';
import jwtDecode from 'jwt-decode';

let headers; 

export const openAccount = (body) => async dispatch => { 
  headers = {
    'Content-Type': 'application/json',
    'x-access-token': `${localStorage.getItem('token')}`
  };
  try {
    const response = await axios.post('/accounts', body, { headers });
    const { data } = response.data;
    const success = `Your account number is ${data.accountnumber}`;
    dispatch({ type: CREATE_ACCOUNT, payload: { success, error: '', accountDetails: { ...data }} });
  } catch (error) {
    const err =
      (typeof error.response !== 'undefined' ?
        error.response.data.error.replace(/[""]/g, '').split(':', 1) :
        error.message);
    dispatch({
      type: CREATE_ACCOUNT_ERROR,
      payload: { error: err, success: '', accountDetails: {} }
    });
  }
}

export const getAccount = () => async dispatch => {
  headers = {
    'Content-Type': 'application/json',
    'x-access-token': `${localStorage.getItem('token')}`
  };
  try {
    const payload = jwtDecode(localStorage.getItem('token'));
    const { data: { email } } = payload;
    const response = await axios.get(`/user/${email}/accounts`, {
      headers
    });
    dispatch({
      type: GET_ACCOUNT,
      payload: {
        noAccount: '', accounts: response.data.data, success: '', error: ''
      }
    });
  } catch (error) {
    const err =
      (typeof error.response !== 'undefined' ?
        error.response.data.error.replace(/[""]/g, '').split(':', 1) :
        error.message);
    if (error.response.status === 401) {
      await dispatch({ type: LOG_OUT });
    } else {
      await dispatch({
        type: GET_ACCOUNT_ERROR,
        payload: { noAccount: err, accounts: [] }
      });
    }
  }
}
