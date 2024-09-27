import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../reducers/actions/postActions';
import '../styles/componentos/Home.sass'

const Home = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const postsArray = Array.isArray(posts) ? posts : [];

  return (
    <div>
      <h2>Blalala REd</h2>
      <img src='../../img/99px_ru_animacii_40123_glaza_na_chernom_fone.gif' type='img'></img>
      {postsArray.length === 0 ? (
        <p>No posts available</p>
        
      ) : (
        postsArray.map(post => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;