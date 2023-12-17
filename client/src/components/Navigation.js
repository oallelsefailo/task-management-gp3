import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard, faTable } from "@fortawesome/free-solid-svg-icons";
import "./navigation.css";

function Navigation() {
  const [activeLinkId, setActiveLinkId] = useState(null);

  const handleLiClick = (id) => {
    setActiveLinkId(id);
  };

  const getLiStyle = (id) => ({
    backgroundColor: activeLinkId === id ? "#4B0082" : "transparent",
  });

  const getLinkStyle = (id) => ({
    padding: "10px", 
    color: "#a9b4c1",
  });

  return (
    <header>
      <nav className="firstNav">
        <ul>
          <li style={getLiStyle(1)}>
            <NavLink
              to="/task"
              style={getLinkStyle(1)}
              onClick={() => handleLiClick(1)}
            >
              <FontAwesomeIcon icon={faChalkboard} /> &nbsp; Boards
            </NavLink>
          </li>
          <li style={getLiStyle(2)}>
            <NavLink
              to="/collections"
              style={getLinkStyle(2)}
              onClick={() => handleLiClick(2)}
            >
              <FontAwesomeIcon icon={faTable} /> &nbsp; Collections
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="nav-dropdown">
        Evil Plans Projects
        <nav>
          <ul>
            <li>Collections</li>
            <li>Highlights</li>
            <li>Views</li>
            <li>Members</li>
            <li>Settings</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navigation;
