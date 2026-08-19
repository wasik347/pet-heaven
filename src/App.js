import NavBar from "./NavBar";
import "./styles.css";

import Home from "./Home";
import About from "./About";
import Cats from "./Cats";
import Dogs from "./Dogs";
import Adopt from "./Adopt";
import Release from "./Release";
import PetCare from "./PetCare";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";

import {
  HashRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/adopt" element={<Adopt />} />
          <Route path="/release" element={<Release />} />
          <Route path="/pet-care" element={<PetCare />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;