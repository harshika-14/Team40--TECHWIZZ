import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-logo">
        SAERS
      </Link>

      <ul className="nav-links">
        <li><a href="hero.jsx">Home</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">How It Works</a></li>
        <li><a href="">Contact</a></li>
      </ul>

      <div className="nav-auth">
        <Link to="/login" className="nav-btn">
          Login
        </Link>
        <Link to="/signup" className="nav-btn1">
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
