import React from 'react';
import AppLogo from '../assets/images/red_single-room_icon-icons.com_59538.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={AppLogo} alt="Logo" />
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search Destinations..."
          onChange={(e) => {
            // Handle search functionality here
            console.log("Search query:", e.target.value);
            // You can use the entered value (e.target.value) for searching/filtering
          }}
        />
      </div>
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/accommodation">Accommodation</a></li>
        <li><a href="/profile">Profile</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
