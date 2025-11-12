import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar layout">
      <div className="navbar-left">
        <a href="/" className="brand">
          LoopIn
        </a>
      </div>

      <div className="search-container">
        <input
          className="search-input"
          type="search"
          placeholder="Search discussions..."
        />
        <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      </div>

      <div className="navbar-right">
        <a className="link" href="#register">
          Sign up
        </a>
        <a className="link" href="#login">
          Log in
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
