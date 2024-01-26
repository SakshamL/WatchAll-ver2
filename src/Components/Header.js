import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className="header">
        <h2 className="logo">WatchAll</h2>
        <input
          className="searchbar"
          type="text"
          placeholder="Search Movies, TV Shows here...."
        />
        <ul>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>Favourites</li>
        </ul>
        <img
          className="avatar"
          src="https://png.pngtree.com/png-vector/20220709/ourmid/pngtree-businessman-user-avatar-wearing-suit-with-red-tie-png-image_5809521.png"
          alt="avatar"
        />
      </div>
    </>
  );
}

export default Header;
