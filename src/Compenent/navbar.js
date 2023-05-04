import React from "react";


function Navbar() {
  return (
    <div>
    <nav className="navbar">
      <div className="navbar-logo">
        LOGO
      </div>
      <ul className="navbar-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;

