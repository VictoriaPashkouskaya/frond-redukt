// src/reducers/postReducer.jsx

const initialState = {
  posts: [],
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return {
        ...state,
        posts: Array.isArray(action.payload) ? action.payload : [],
        loading: false,
      };

    case 'FETCH_POSTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case 'ADD_POST_SUCCESS':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false,
      };

    case 'ADD_POST_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default postReducer; 
