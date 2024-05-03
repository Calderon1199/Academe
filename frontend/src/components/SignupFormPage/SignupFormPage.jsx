import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";
import CompanyForm from "./CompanyForm";

function SignupFormPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const sessionUser = useSelector((state) => state.session.user);
  const [accountType, setAccountType] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentRelation, setStudentRelation] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  if (sessionUser) return <Navigate to="/" replace={true} />;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setErrors({
        confirmPassword:
          "Confirm Password field must be the same as the Password field",
      });
    }

    const serverResponse = await dispatch(
      thunkSignup({
        email,
        username,
        password,
      })
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="signup-form-page">
      <div className="signup-form-background">
        <img src="../../public/assets/logo.jpg" alt="Abstract Background"></img>
      </div>
      <div className="signup-form-side">
        <h1>Registration</h1>
        <h3>Choose your account type</h3>
        <div className="account-type-buttons">
          <button onClick={() => setAccountType('company')}>Company <i class="fa-regular fa-building"></i></button>
          <button onClick={() => setAccountType('admin')}>Admin <i class="fa-solid fa-user-tie"></i></button>
          <button onClick={() => setAccountType('parent')}>Parent <i class="fa-regular fa-user"></i></button>
        </div>
        {errors.server && <p>{errors.server}</p>}
        {accountType === 'company' ? (
          < CompanyForm />
        ): (
          <form onSubmit={handleSubmit} className="signup-form">
          <div className="signup-info-grid">
            <label>
            First Name
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            </label>
            {errors.firstName && <p>{errors.firstName}</p>}
            <label>
              Last Name
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </label>
            {errors.lastName && <p>{errors.lastName}</p>}
            <label>
            Phone Number
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            </label>
            {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
            <label>
              Student relation
              <input
                type="text"
                value={studentRelation}
                onChange={(e) => setStudentRelation(e.target.value)}
                required
              />
            </label>
            {errors.studentRelation && <p>{errors.studentRelation}</p>}
          </div>
          <label>
            Email
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          {errors.email && <p>{errors.email}</p>}
          <label>
            Username
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
          {errors.username && <p>{errors.username}</p>}
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
          <label>
            Re-enter Password
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </label>
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </form>
        )}
          <button type="submit" className="signup-enter-button enabled">Submit</button>
      </div>
    </div>
  );
}

export default SignupFormPage;
