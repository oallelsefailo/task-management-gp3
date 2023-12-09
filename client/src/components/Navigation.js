import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChalkboard, faTable } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { NavLink } from "react-router-dom";
import "./navigation.css";

function Navigation() {
  return (
    <header>
      <nav className="firstNav">
        <ul>
          <li>
            <NavLink to="/" activeClassName="active-link">
              <FontAwesomeIcon icon={faChalkboard} /> &nbsp; Boards
            </NavLink>
          </li>
          <li>
              <FontAwesomeIcon icon={faTable} /> &nbsp;
              Collections
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
