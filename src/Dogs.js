import { Link } from "react-router-dom";

function Dogs() {
  const dogs = [
    {
      id: 1,
      name: "Milo",
      breed: "Golden Retriever",
      age: "2 Years",
      gender: "Male",
      image: "/images/milo.jpg"
    },
    {
      id: 2,
      name: "Luna",
      breed: "Corgi",
      age: "1 Year",
      gender: "Female",
      image: "/images/luna.jpg"
    },
    {
      id: 3,
      name: "Max",
      breed: "Labrador",
      age: "3 Years",
      gender: "Male",
      image: "/images/max.jpg"
    }
  ];

  return (
    <div className="pets-page">
      <div className="page-heading">
        <span>MEET OUR DOGS</span>
        <h1>Looking for their forever homes.</h1>
        <p>
          Meet some of our friendly dogs currently available for adoption.
        </p>
      </div>

      <div className="pet-grid">
        {dogs.map((dog) => (
          <div className="pet-card" key={dog.id}>
            
            <div className="pet-card-image">
              <img src={dog.image} alt={dog.name} />
            </div>

            <div className="pet-card-content">
              <div className="pet-title">
                <h2>{dog.name}</h2>
                <span>Available</span>
              </div>

              <p className="breed">{dog.breed}</p>

              <div className="pet-details">
                <span>🎂 {dog.age}</span>
                <span>🐾 {dog.gender}</span>
              </div>

              <p>
                Friendly, affectionate and ready to meet a loving new family.
              </p>

              <Link 
                to="/adopt"
                state={{ petName: dog.name }} 
                className="pet-button"
              >
                Adopt {dog.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dogs;

