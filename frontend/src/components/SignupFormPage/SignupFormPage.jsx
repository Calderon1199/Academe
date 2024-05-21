import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { thunkSignup } from "../../redux/session";
import "./SignupForm.css";
import CompanyForm from "./CompanyForm";
import AdminForm from "./AdminForm/AdminForm";
import ParentForm from "./ParentForm";

function SignupFormPage() {
  const sessionUser = useSelector((state) => state.session.user);
  const [accountType, setAccountType] = useState("company");

  if (sessionUser) return <Navigate to="/dashboard" replace={true} />;


  return (
    <div className="signup-form-page">
      <div className="signup-form-background">
        <img src="../../public/assets/logo.jpg" alt="Abstract Background"></img>
      </div>
      <div className="signup-form-side">
        <h1>Registration</h1>
        <h3>Choose your account type</h3>
        <div className="account-type-buttons">
          <button className={accountType === 'company' ? 'selected': ''} onClick={() => setAccountType('company')}>Company <i className="fa-regular fa-building"></i></button>
          <button className={accountType === 'admin' ? 'selected': ''} onClick={() => setAccountType('admin')}>Admin <i className="fa-solid fa-user-tie"></i></button>
          <button className={accountType === 'parent' ? 'selected': ''} onClick={() => setAccountType('parent')}>Parent <i className="fa-regular fa-user"></i></button>
        </div>
        {accountType === 'company' && (
          < CompanyForm />
        )}

        {accountType === 'admin' && (
          < AdminForm />
        )}

        {accountType === 'parent' && (
          < ParentForm />
        )}
      </div>
    </div>
  );
}

export default SignupFormPage;
