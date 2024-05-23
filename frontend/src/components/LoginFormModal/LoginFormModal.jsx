import { useEffect, useState } from "react";
import { thunkLogin } from "../../redux/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { NavLink } from "react-router-dom";

function LoginFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const { closeModal } = useModal();

  useEffect(() => {
    if (email && accountType && password) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true)
    }
  }, [accountType, password, email])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serverResponse = await dispatch(
      thunkLogin({
        email,
        password,
      }, accountType)
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      closeModal();
    }
  };

  return (
    <div className="login-container">
      <img src="../../public/assets/logo.jpg" style={{height: '80px', width: '80px'}}></img>
      <h2>Welcome back</h2>
      <h5>Choose your account type</h5>
      <div className="account-type-buttons">
          <button className={accountType === 'company' ? 'selected': ''} onClick={() => setAccountType('company')}>Company <i className="fa-regular fa-building"></i></button>
          <button className={accountType === 'admin' ? 'selected': ''} onClick={() => setAccountType('admin')}>Admin <i className="fa-solid fa-user-tie"></i></button>
          <button className={accountType === 'parent' ? 'selected': ''} onClick={() => setAccountType('parent')}>Parent <i className="fa-regular fa-user"></i></button>
        </div>
        <hr className="solid"></hr>
      <form onSubmit={handleSubmit}>
        <label>
          Email Address
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        {errors.password && <p>{errors.password}</p>}
      </form>
      <hr className="solid"></hr>
      <button type="submit" onClick={(e) => handleSubmit(e)} className={buttonDisabled ? "login-button" : "login-button-enabled"} disabled={buttonDisabled}>Sign In</button>
      <p>Don't have an account? <NavLink to='/signup' onClick={() => closeModal()} id="Create-Account-Link">Create an account</NavLink></p>
    </div>
  );
}

export default LoginFormModal;
