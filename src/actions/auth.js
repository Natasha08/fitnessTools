import config from '../../config';
import axios from 'axios';

function userRequest() {
  return {
    type: 'LOGIN_USER_REQUEST'
  }
}

function userRequestFailure(error) {
  return {
    type: 'LOGIN_USER_FAILURE',
    error
  }
}

export function userReceived({ token }) {
  return {type: 'LOGIN_USER', token};
}

export function loginUser(user) {
  return dispatch => {
    const user = { username: 'admin', password: 'asdf' };
    const url = config.API_HOST + '/api/token';
    userRequest();

    return axios.post(url, user)
    .then((response) => dispatch(userReceived(response.data)))
    .catch((error) => dispatch(userRequestFailure(error)));
  }
}
