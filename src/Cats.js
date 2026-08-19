import { Link } from "react-router-dom";

function Cats() {
  const cats = [
    {
      id: 1,
      name: "Bella",
      breed: "British Shorthair",
      age: "2 Years",
      gender: "Female",
      image: "/images/bella.jpg"
    },
    {
      id: 2,
      name: "Leo",
      breed: "Domestic Shorthair",
      age: "1 Year",
      gender: "Male",
      image: "/images/leo.jpg"
    },
    {
      id: 3,
      name: "Coco",
      breed: "Ragdoll",
      age: "3 Years",
      gender: "Female",
      image: "/images/coco.jpg"
    }
  ];

  return (
    <div className="pets-page">
      <div className="page-heading">
        <span>MEET OUR CATS</span>
        <h1>Your new companion is waiting.</h1>
        <p>
          Meet some of our lovely cats currently searching for permanent homes.
        </p>
      </div>

      <div className="pet-grid">
        {cats.map((cat) => (
          <div className="pet-card" key={cat.id}>
            
            <div className="pet-card-image">
              <img src={cat.image} alt={cat.name} />
            </div>

            <div className="pet-card-content">
              <div className="pet-title">
                <h2>{cat.name}</h2>
                <span>Available</span>
              </div>

              <p className="breed">{cat.breed}</p>

              <div className="pet-details">
                <span>🎂 {cat.age}</span>
                <span>🐾 {cat.gender}</span>
              </div>

              <p>
                Gentle, playful and ready to become part of a caring family.
              </p>

              <Link 
                to="/adopt"
                state={{ petName: cat.name }} 
                className="pet-button"
              >
                Adopt {cat.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cats;