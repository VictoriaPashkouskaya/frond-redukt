const initialState = {
    token: localStorage.getItem('token'),
    user: null,
    loading: false,
    error: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
          loading: false,
          error: null,
        };
  
      case 'REGISTER_SUCCESS':
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          token: action.payload.token,
          user: action.payload.user,
          loading: false,
          error: null,
        };
  
      case 'LOGOUT':
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          user: null,
        };
  
      case 'AUTH_FAILURE':
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  