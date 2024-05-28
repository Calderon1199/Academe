import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { thunkSignup } from "../../../redux/session";

function AdminForm() {
   const [confirmPassword, setConfirmPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [companyId, setCompanyId] = useState(null);
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
                firstName,
                lastName,
                phoneNumber,
                companyId: 1,
                email,
                password
            }, 'admin')
        );



        if (!serverResponse.ok) {
                setErrors(serverResponse.errors)
        } else {
            setErrors({}); // Clear errors
            navigate("/dashboard"); // Navigate to the desired page on successful submission
        }

        setIsSubmitting(false); // Reset isSubmitting after handling form submission
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="signup-form">
            <div className="signup-info-grid">
                <label>
                    <div className='error-div'>
                        First Name
                        {errors?.firstName && <p className='company-signup-errors'>{errors?.firstName}</p>}
                    </div>
                    <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    />
                </label>
                <label>
                    <div className='error-div'>
                        Last Name
                        {errors?.lastName && <p className='company-signup-errors'>{errors?.lastName}</p>}
                    </div>
                    <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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

export default AdminForm;
