import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <h2>Welcome, {user?.username}!</h2>
      <p>Email: {user?.email}</p>
      <p>Age: {user?.age}</p>

      <div className="user-posts">
        <h3>Your Posts</h3>
        {/* Список постов пользователя */}
      </div>
    </div>
  );
};

export default Profile;
