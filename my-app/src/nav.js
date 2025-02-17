import React from "react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-black px-3">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold fst-italic" href="#">
          Inspiration by <span className="fw-normal">Trazler</span>
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="#destinations">Destinations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#food">Food</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#well-being">Well Being</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sport">Sport</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#family">Family</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#lifestyle">Lifestyle</a>
            </li>
          </ul>

          {/* Search Icon & Button */}
          <div className="d-flex align-items-center">
            <Search className="text-white me-3" style={{ cursor: "pointer" }} />
            <button className="btn btn-light">Get Your $120 Christmas Gift</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

