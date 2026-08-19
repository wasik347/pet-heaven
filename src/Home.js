import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">🐾 Find. Love. Adopt.</span>

          <h1>Give a pet the home they deserve.</h1>

          <p>
            Meet loving dogs and cats waiting for their forever homes.
            Your new best friend might be closer than you think.
          </p>

          <div className="hero-buttons">
            <Link to="/dogs" className="primary-btn">
              Meet Our Pets
            </Link>

            <Link to="/adopt" className="secondary-btn">
              Start Adoption
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={process.env.PUBLIC_URL + "/images/hero-pets.jpg"}
            alt="Dog and cat waiting for adoption"
            className="hero-pet-image"
          />
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <span>OUR MISSION</span>
          <h2>Every pet deserves a second chance.</h2>
          <p>
            Pet Heaven connects pets in need with caring people who are
            ready to give them safe, loving and permanent homes.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-icon">🐕</div>
            <h3>Find a Companion</h3>
            <p>
              Browse dogs and cats currently looking for their forever
              families.
            </p>
            <Link to="/dogs">View pets →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏡</div>
            <h3>Adopt a Pet</h3>
            <p>
              Ready to welcome someone new? Submit an adoption request
              through our simple process.
            </p>
            <Link to="/adopt">Start adopting →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">❤️</div>
            <h3>Pet Care</h3>
            <p>
              Learn useful tips about nutrition, exercise, health and
              responsible pet ownership.
            </p>
            <Link to="/pet-care">Learn more →</Link>
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div>
          <span>READY TO MEET YOUR NEW FRIEND?</span>
          <h2>Make a difference in a pet's life today.</h2>
        </div>

        <Link to="/adopt" className="cta-btn">
          Adopt Now
        </Link>
      </section>

      <section className="reviews-section">
        <div className="section-heading">
          <span>HAPPY FAMILIES</span>
          <h2>Stories from our community.</h2>
          <p>
            See what our members say about their Pet Heaven adoption experience.
          </p>
        </div>

        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "The adoption process was simple and the team was very helpful.
              Milo has become such an important part of our family."
            </p>
            <div className="review-person">
              <div className="review-avatar">JL</div>
              <div>
                <strong>Jason Lee</strong>
                <span>Adopted Milo</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "Pet Heaven helped us find the perfect cat for our home.
              The pet care information was also very useful for a first-time owner."
            </p>
            <div className="review-person">
              <div className="review-avatar">ST</div>
              <div>
                <strong>Sarah Tan</strong>
                <span>Adopted Luna</span>
              </div>
            </div>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <p>
              "A very easy and pleasant experience. We could view the pets,
              learn about them and submit our adoption application online."
            </p>
            <div className="review-person">
              <div className="review-avatar">AR</div>
              <div>
                <strong>Adam Rahman</strong>
                <span>Pet Heaven Member</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;