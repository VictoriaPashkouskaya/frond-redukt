import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await axios.get('/api/posts');
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'FETCH_POSTS_FAILURE', error });
  }
};

export const addPost = (title, content) => async (dispatch, getState) => {
  const { auth } = getState();
  const config = {
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
  };

  try {
    const res = await axios.post('/api/posts', { title, content }, config);
    dispatch({ type: 'ADD_POST_SUCCESS', payload: res.data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'ADD_POST_FAILURE', error });
  }
};
