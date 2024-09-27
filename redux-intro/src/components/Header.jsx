
import { Link } from 'react-router-dom';
import '../styles/componentos/header.sass'; 

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</Link>
        <Link to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</Link>
        <Link to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</Link>
        <Link to="/register" className={({ isActive }) => isActive ? "active" : ""}>Register</Link>
        <Link to="/add-post" className={({ isActive }) => isActive ? "active" : ""}>Add Post</Link>
      </nav>
    </header>
  );
};

export default Header;
