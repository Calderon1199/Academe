import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { thunkSignup } from '../../../redux/session';

function CompanyForm() {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [address, setAddress] = useState("");
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [state, setState] = useState("");
    const [name, setName] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // New state to track form submission

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set isSubmitting to true when form is submitted

        if (password !== confirmPassword) {
            setErrors({
                confirmPassword: "Confirm Password field must be the same as the Password field",
            });
            setIsSubmitting(false); // Reset isSubmitting
            return;
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
            }, 'company')
        );

        console.log(serverResponse, '--------------')


        if (!serverResponse.ok) {
                setErrors(serverResponse.errors)
        } else {
            setErrors({}); // Clear errors
            navigate("/home"); // Navigate to the desired page on successful submission
        }

        setIsSubmitting(false); // Reset isSubmitting after handling form submission
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="signup-form">
            <div className="signup-info-grid">
                <label>
                    <div className='error-div'>
                        Company Name
                        {errors?.name && <p className='company-signup-errors'>{errors?.name}</p>}
                    </div>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <div className='error-div'>
                        Phone Number
                        {errors?.phoneNumber && <p className='company-signup-errors'>{errors?.phoneNumber}</p>}
                    </div>
                    <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <div className='error-div'>
                        Address
                        {errors?.address && <p className='company-signup-errors'>{errors?.address}</p>}
                    </div>
                    <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <div className='error-div'>
                        State
                        {errors?.state && <p className='company-signup-errors'>{errors?.state}</p>}
                    </div>
                    <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <div className='error-div'>
                        Zipcode
                        {errors?.zipcode && <p className='company-signup-errors'>{errors?.zipcode}</p>}
                    </div>
                    <input
                    type="text"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    required
                    />
                </label>
            </div>
            <label>
                <div className='error-div'>
                    Email
                    {errors?.email && <p className='company-signup-errors'>{errors?.email}</p>}
                </div>
                <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <label>
                <div className='error-div'>
                    Password
                    {errors?.password && <p className='company-signup-errors'>{errors?.password}</p>}
                </div>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </label>
            <label>
                Re-enter Password
                {errors?.confirmPassword && <p className='company-signup-errors'>{errors?.confirmPassword}</p>}
                <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                />
            </label>
            </form>
            <button type="submit" onClick={(e) => handleSubmit(e)} className="signup-enter-button enabled">Submit</button>
        </>
    );
}

export default CompanyForm;
