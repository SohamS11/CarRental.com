import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="innerNavbar">
        <h1>CarRental.com</h1>
        <div className="routing-Links">
          <a href="/">Home</a>
          <a href="/">Services</a>
          <a href="/">Blog</a>
          <a href="/">Contact</a>
        </div>
        <div className="dropdown-menu">
          <select>
            <option>IND</option>
            <option>ENG</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
