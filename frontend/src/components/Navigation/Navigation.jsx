import { NavLink, Navigate, useNavigate } from "react-router-dom";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import { useSelector } from "react-redux";
import { useModal } from "../../context/Modal";
import SignupFormModal from "../SignupFormModal";
import LoginFormModal from "../LoginFormModal";

function Navigation() {
  const {setModalContent} = useModal();
  const user = useSelector(state => state.session.user);
  const navigate = useNavigate()

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
        <button id="admin-button" onClick={() => setModalContent(< LoginFormModal />)}>Log In</button>
        <button id="parent-button" onClick={() => navigate('/signup')}>Sign Up</button>
      </li>
    </ul>
  );
}

export default Navigation;
