import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const fullName = form.fullName.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const interestedIn = form.interestedIn.value;

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Create member object
    const member = {
      fullName,
      email,
      phone,
      password,
      interestedIn
    };

    // Save account in localStorage
    localStorage.setItem("petHeavenMember", JSON.stringify(member));

    setError("");
    setSubmitted(true);
  };

  return (
    <div className="form-page">
      <div className="page-heading">
        <span>JOIN PET HEAVEN</span>
        <h1>Create your member account.</h1>
        <p>
          Join our community and start your journey towards giving a pet
          a loving home.
        </p>
      </div>

      <div className="form-card auth-card">
        {submitted ? (
          <div className="success-message">
            <h2>🐾 Account Created!</h2>

            <p>
              Welcome to Pet Heaven! Your member account has been
              successfully created.
            </p>

            <div className="success-actions">
                <Link to="/login" className="primary-btn">
                    Go to Login
                </Link>

                <button onClick={() => setSubmitted(false)}>
                    Create Another Account
                </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Create a password"
                minLength="6"
                required
              />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                minLength="6"
                required
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <div className="form-group">
              <label>Interested In</label>

              <select name="interestedIn" required>
                <option value="">Select an option</option>
                <option>Adopting a Dog</option>
                <option>Adopting a Cat</option>
                <option>Pet Care Information</option>
                <option>General Membership</option>
              </select>
            </div>

            <button type="submit" className="primary-button">
              Create Account
            </button>

            <p className="form-note">
              Demo registration — account information is stored locally.
            </p>

          </form>
        )}
      </div>
    </div>
  );
}

export default Signup;