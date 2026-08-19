import { useState } from "react";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-page">
      <div className="page-heading">
        <span>GET IN TOUCH</span>
        <h1>We'd love to hear from you.</h1>
        <p>
          Have a question about adoption, releasing a pet or pet care?
          Send us a message and our team will be happy to help.
        </p>
      </div>

      <div className="form-card">
        {submitted ? (
          <div className="success-message">
            <h2>🐾 Message Sent!</h2>
            <p>
              Thank you for contacting Pet Heaven. We will get back to you soon.
            </p>
            <button onClick={() => setSubmitted(false)}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Full Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Subject</label>
              <select required>
                <option value="">Select a subject</option>
                <option>Pet Adoption</option>
                <option>Release a Pet</option>
                <option>Pet Care</option>
                <option>General Enquiry</option>
              </select>
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea
                rows="6"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>

            <button type="submit" className="primary-button">
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;