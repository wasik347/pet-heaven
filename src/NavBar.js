import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <div className="logo">🐾 Pet Heaven</div>

      <div className="menuitem">
        <Link to="/">Home</Link>
        <Link to="/dogs">Dogs</Link>
        <Link to="/cats">Cats</Link>
        <Link to="/adopt">Adopt</Link>
        <Link to="/release">Release Pet</Link>
        <Link to="/pet-care">Pet Care</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  );
}

export default NavBar;