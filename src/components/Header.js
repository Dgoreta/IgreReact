import React from "react";
import { Link, NavLink } from "react-router-dom";
import Image from "../images/trokut_logo.png";
import { RenderLinks,navLinks } from "../data";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <Link className="navbar-brand" to="/">
        <img id="naslovnaSlika" src={Image} />
      </Link>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <RenderLinks/>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
