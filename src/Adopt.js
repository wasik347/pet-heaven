import { useState } from "react";
import { useLocation } from "react-router-dom";

function Adopt() {
  const [submitted, setSubmitted] = useState(false);
  const location = useLocation();
  const selectedPet = location.state?.petName || "";

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-page">
      <div className="page-heading">
        <span>PET ADOPTION</span>
        <h1>Ready to meet your new best friend?</h1>
        <p>
          Complete the adoption form below and our team will review your
          application.
        </p>
      </div>

      <div className="form-card">
        {submitted ? (
          <div className="success-message">
            <h2>🐾 Application Submitted!</h2>
            <p>
              Thank you for your interest in adopting from Pet Heaven.
              Our team will review your application and contact you soon.
            </p>

            <button onClick={() => setSubmitted(false)}>
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
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
              <label>Housing Type</label>
              <select required>
                <option value="">Select housing type</option>
                <option>HDB</option>
                <option>Condominium</option>
                <option>Landed Property</option>
                <option>Other</option>
              </select>
            </div>

            <div className="form-group">
                <label>Which pet would you like to adopt?</label>

                <select name="petName" defaultValue={selectedPet} required>
                    <option value="">Select a pet</option>

                    <option value="Milo">Milo - Golden Retriever</option>
                    <option value="Luna">Luna - Corgi</option>
                    <option value="Max">Max - Labrador</option>

                    <option value="Bella">Bella - British Shorthair</option>
                    <option value="Leo">Leo - Domestic Shorthair</option>
                    <option value="Coco">Coco - Ragdoll</option>
                </select>
            </div>

            <div className="form-group">
              <label>Do you currently own any pets?</label>
              <select required>
                <option value="">Select an option</option>
                <option>Yes</option>
                <option>No</option>
              </select>
            </div>

            <button type="submit" className="primary-button">
              Submit Adoption Application
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Adopt;