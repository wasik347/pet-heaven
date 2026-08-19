function About() {
  return (
    <div className="about-page">
      <div className="page-heading">
        <span>ABOUT PET HEAVEN</span>
        <h1>Helping pets find the families they deserve.</h1>
        <p>
          Pet Heaven is a pet adoption institution dedicated to connecting
          dogs and cats in need with responsible and loving families.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card">
          <div className="about-icon">🐾</div>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide abandoned and surrendered pets with
            a second chance by helping them find safe, caring and permanent
            homes.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">❤️</div>
          <h2>Our Purpose</h2>
          <p>
            We aim to encourage responsible pet ownership while making
            adoption simple and accessible for people who are ready to
            welcome a pet into their family.
          </p>
        </div>

        <div className="about-card">
          <div className="about-icon">🏡</div>
          <h2>Our Commitment</h2>
          <p>
            We believe every animal deserves compassion, proper care and
            the opportunity to live in a loving home.
          </p>
        </div>
      </div>

      <div className="about-story">
        <div>
          <span>WHAT WE DO</span>
          <h2>Connecting people and pets.</h2>
        </div>

        <p>
          Pet Heaven provides information about dogs and cats available
          for adoption, allows potential adopters to submit adoption
          requests and provides a release service for owners who can no
          longer care for their pets. We also provide pet care information
          to help owners understand the responsibilities involved in
          caring for an animal.
        </p>
      </div>
    </div>
  );
}

export default About;