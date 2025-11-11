import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="brand">
          <div className="logo">App</div>
        </a>
        <div className="search">
          <input type="search" placeholder="Search discussions..." />
        </div>
      </div>

      <div className="navbar-right">
        <a href="#login">Log in</a>
        <a href="#register" className="btn-outline">
          Create account
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
