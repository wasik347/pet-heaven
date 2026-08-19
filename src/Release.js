import { useState } from "react";

function Release() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-page">
      <div className="page-heading">
        <span>RELEASE A PET</span>
        <h1>Need help finding your pet a new home?</h1>
        <p>
          We understand that circumstances can change. Complete the form
          below and our team will assist you with the rehoming process.
        </p>
      </div>

      <div className="form-card">
        {submitted ? (
          <div className="success-message">
            <h2>🐾 Request Submitted!</h2>
            <p>
              Your pet release request has been received. Our team will
              review the information and contact you soon.
            </p>

            <button onClick={() => setSubmitted(false)}>
              Submit Another Request
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Owner's Full Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="form-group">
              <label>Pet Name</label>
              <input
                type="text"
                placeholder="Enter your pet's name"
                required
              />
            </div>

            <div className="form-group">
              <label>Pet Type</label>
              <select required>
                <option value="">Select pet type</option>
                <option>Dog</option>
                <option>Cat</option>
              </select>
            </div>

            <div className="form-group">
              <label>Breed</label>
              <input
                type="text"
                placeholder="Enter breed"
                required
              />
            </div>

            <div className="form-group">
              <label>Pet Age</label>
              <input
                type="number"
                min="0"
                placeholder="Age"
                required
              />
            </div>

            <div className="form-group">
              <label>Gender</label>
              <select required>
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="form-group">
              <label>Reason for Releasing Pet</label>
              <textarea
                rows="5"
                placeholder="Please explain why you need to rehome your pet..."
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label>Pet Behaviour / Medical Information</label>
              <textarea
                rows="4"
                placeholder="Tell us anything important about your pet..."
              ></textarea>
            </div>

            <button type="submit" className="primary-button">
              Submit Release Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Release;