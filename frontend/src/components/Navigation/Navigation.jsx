import { NavLink } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { useSelector } from "react-redux";

function Navigation() {
  return (
    <ul className="nav-list">
      <li id="nav-logo">
        <NavLink to="/"><img src="../../public/assets/logo.jpg" alt="Logo" /></NavLink>
      </li>

      <div className="links2">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/tutorial">Tutorial</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/request">Request A Feature</NavLink>
        </li>
      </div>

      <li className="nav-buttons">
        <button id="admin-button">Log In</button>
        <button id="parent-button">Sign Up</button>
      </li>
    </ul>
  );
}

export default Navigation;
