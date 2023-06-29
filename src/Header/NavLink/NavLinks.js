import React from "react";

import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <NavLink className="link">STAFF</NavLink>
      </li>
      <li>
        <NavLink className="link">RESEARCH</NavLink>
        <div className="dropdown">
          <li>
            <NavLink className="link">STAFF</NavLink>
          </li>
          <li>
            <NavLink className="link">RESEARCH</NavLink>
          </li>
          <li>
            <NavLink className="link">STUDENT ARENA</NavLink>
          </li>
          <li>
            <NavLink className="link">BLOG</NavLink>
          </li>
        </div>
      </li>
      <li>
        <NavLink className="link">STUDENT ARENA</NavLink>
      </li>
      <li>
        <NavLink className="link">BLOG</NavLink>
      </li>
      <li>
        <NavLink className="link">CONTACT US</NavLink>
        <div className="dropdown">
          <li>
            <NavLink className="link">STAFF</NavLink>
          </li>
          <li>
            <NavLink className="link">RESEARCH</NavLink>
          </li>
          <li>
            <NavLink className="link">STUDENT ARENA</NavLink>
          </li>
          <li>
            <NavLink className="link">BLOG</NavLink>
          </li>
        </div>
      </li>
    </ul>
  );
};

export default NavLinks;