import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("petHeavenLoggedInUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    const updateUser = () => {
      const savedUser = localStorage.getItem("petHeavenLoggedInUser");
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    window.addEventListener("userLoginChanged", updateUser);

    return () => {
      window.removeEventListener("userLoginChanged", updateUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("petHeavenLoggedInUser");
    setUser(null);
    navigate("/");
  };

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

        {user ? (
          <>
            <span className="member-name">
              Hi, {user.fullName?.split(" ")[0]}
            </span>

            <button
              className="nav-logout"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;