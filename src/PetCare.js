function PetCare() {
  const tips = [
    {
      icon: "🥗",
      title: "Healthy Nutrition",
      text: "Provide your pet with a balanced diet suitable for their age, size and health needs. Always provide access to clean drinking water."
    },
    {
      icon: "🏃",
      title: "Regular Exercise",
      text: "Dogs need regular walks and playtime, while cats benefit from interactive toys, climbing areas and daily activities."
    },
    {
      icon: "🩺",
      title: "Veterinary Care",
      text: "Schedule regular veterinary check-ups and keep vaccinations, parasite prevention and health screenings up to date."
    },
    {
      icon: "🧼",
      title: "Grooming & Hygiene",
      text: "Regular brushing, nail trimming, dental care and bathing when appropriate help keep pets comfortable and healthy."
    },
    {
      icon: "🏡",
      title: "Safe Environment",
      text: "Create a comfortable and secure home environment with appropriate bedding, food areas and safe spaces for your pet."
    },
    {
      icon: "❤️",
      title: "Love & Attention",
      text: "Pets need companionship and interaction. Spend quality time playing, training and building trust with your pet."
    }
  ];

  return (
    <div className="pet-care-page">

      <div className="page-heading">
        <span>PET CARE GUIDE</span>
        <h1>Happy pets start with responsible care.</h1>
        <p>
          Owning a pet is a long-term responsibility. Learn the essentials
          for keeping your dog or cat healthy, safe and happy.
        </p>
      </div>

      <div className="care-grid">
        {tips.map((tip, index) => (
          <div className="care-card" key={index}>
            <div className="care-icon">{tip.icon}</div>
            <h2>{tip.title}</h2>
            <p>{tip.text}</p>
          </div>
        ))}
      </div>

      <div className="care-section">
        <div>
          <span>FOR DOG OWNERS</span>
          <h2>Essential Dog Care</h2>
          <p>
            Dogs benefit from daily exercise, consistent training and
            regular social interaction. Provide suitable food, fresh water
            and a safe living environment.
          </p>

          <ul>
            <li>Take your dog for regular walks.</li>
            <li>Provide mental stimulation through toys and training.</li>
            <li>Maintain regular veterinary check-ups.</li>
            <li>Keep vaccinations and parasite prevention up to date.</li>
          </ul>
        </div>

        <div className="care-visual">🐕</div>
      </div>

      <div className="care-section reverse">
        <div className="care-visual">🐈</div>

        <div>
          <span>FOR CAT OWNERS</span>
          <h2>Essential Cat Care</h2>
          <p>
            Cats need a stimulating indoor environment with opportunities
            to climb, scratch, play and rest comfortably.
          </p>

          <ul>
            <li>Provide a clean litter box.</li>
            <li>Provide scratching posts and interactive toys.</li>
            <li>Keep fresh water available throughout the day.</li>
            <li>Schedule routine health and dental checks.</li>
          </ul>
        </div>
      </div>

    <section className="care-video-section">
        <div className="section-heading">
            <span>PET CARE VIDEOS</span>
            <h2>Learn from helpful pet care guides.</h2>
            <p>
            Watch these short videos for additional advice on responsible
            dog and cat care.
            </p>
        </div>

        <div className="video-grid">
            <div className="video-card">
            <div className="video-wrapper">
                <iframe
                src="https://www.youtube.com/embed/Zb3Wzs2FcFE"
                title="Dog Care Guide"
                allowFullScreen
                ></iframe>
            </div>

            <h3>Basic Dog Care</h3>
            <p>
                Learn useful tips about exercise, nutrition, grooming and
                responsible dog ownership.
            </p>
            </div>

            <div className="video-card">
            <div className="video-wrapper">
                <iframe
                src="https://www.youtube.com/embed/tNu4-G0SmRU"
                title="Cat Care Guide"
                allowFullScreen
                ></iframe>
            </div>

            <h3>Basic Cat Care</h3>
            <p>
                Learn how to create a safe, healthy and comfortable environment
                for your cat.
            </p>
            </div>
       </div>
    </section>

      <div className="care-reminder">
        <span>🐾</span>
        <div>
          <h2>Remember</h2>
          <p>
            Adopting a pet is a long-term commitment. Before adopting,
            make sure you have the time, resources and suitable environment
            needed to care for your new companion.
          </p>
        </div>
      </div>

    </div>
  );
}

export default PetCare;