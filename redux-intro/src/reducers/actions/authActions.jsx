import axios from 'axios';

// Action types
export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
// Action login
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// Action creators
export const registerRequest = () => ({
  type: REGISTER_REQUEST,
});

export const registerSuccess = (user) => ({
  type: REGISTER_SUCCESS,
  payload: user,
});

export const registerFailure = (error) => ({
  type: REGISTER_FAILURE,
  payload: error,
});

// Thunk action for registration
export const register = (username, email, password, age) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const response = await axios.post('http://localhost:3001/api/register', {
      username,
      email,
      password,
      age,
    });
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

// Action creators
const loginRequest = () => ({
  type: LOGIN_REQUEST,
});

const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

// Thunk function for login
export const login = (email, password) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post('http://localhost:3000/api/users/login', {
      email,
      password,
    });
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure(error.response.data));
  }
};