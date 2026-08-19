import { useState } from "react";

function Login() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const savedMember = JSON.parse(
      localStorage.getItem("petHeavenMember")
    );

    if (!savedMember) {
      setError("No member account found. Please sign up first.");
      return;
    }

    if (
      email === savedMember.email &&
      password === savedMember.password
    ) {
      localStorage.setItem(
        "petHeavenLoggedInUser",
        JSON.stringify(savedMember)
      );

      setError("");
      setLoggedIn(true);
    } else {
      setError("Invalid email or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("petHeavenLoggedInUser");
    setLoggedIn(false);
  };

  return (
    <div className="form-page">
      <div className="page-heading">
        <span>MEMBER ACCESS</span>
        <h1>Welcome back.</h1>
        <p>
          Login to your Pet Heaven member account to manage your adoption
          enquiries and pet information.
        </p>
      </div>

      <div className="form-card auth-card">
        {loggedIn ? (
          <div className="success-message">
            <h2>🐾 Login Successful!</h2>
            <p>Welcome back to Pet Heaven.</p>

            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>

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
              <label>Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="primary-button">
              Login
            </button>

            <p className="form-note">
              Login using the member account created on the Sign Up page.
            </p>

          </form>
        )}
      </div>
    </div>
  );
}

export default Login;