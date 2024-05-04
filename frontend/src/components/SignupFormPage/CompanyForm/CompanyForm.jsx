import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';

function CompanyForm(accountType) {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [name, setName] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();



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
          name,
          phoneNumber,
          address,
          state,
          zipcode,
          email,
          password
      }, )
    );

    if (serverResponse) {
      setErrors(serverResponse);
    } else {
      navigate("/");
    }
  };

    return (
        <>
            <form onSubmit={handleSubmit} className="signup-form">
            <div className="signup-info-grid">
                <label>
                Company Name
                <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                />
                </label>
                {errors.name && <p>{errors.name}</p>}
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
                Address
                <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                />
                </label>
                {errors.address && <p>{errors.address}</p>}
                <label>
                State
                <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                required
                />
                </label>
                {errors.state && <p>{errors.state}</p>}
                <label>
                Zipcode
                <input
                type="text"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                required
                />
                </label>
                {errors.zipcode && <p>{errors.zipcode}</p>}
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
            <button type="submit" onClick={() => handleSubmit(e)} className="signup-enter-button enabled">Submit</button>
        </>
    );
}

export default CompanyForm;
