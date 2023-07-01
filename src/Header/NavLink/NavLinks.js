import React from "react";

import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul>
      <li>
        <NavLink to="staff" className="link">
          STAFF
        </NavLink>
      </li>
      <li>
        <NavLink to="research" className="link">
          RESEARCH
        </NavLink>
      </li>
      <li>
        <NavLink to="student-arena" className="link">
          STUDENT ARENA
        </NavLink>
      </li>
      <li>
        <NavLink to="blog" className="link">
          BLOG
        </NavLink>
      </li>
      <li>
        <NavLink to="contact-us" className="link">
          CONTACT US
        </NavLink>
      </li>
      <li>
        <Link className="link">OTHER LINKS</Link>
        <div className="dropdown">
          <Link to="#" className="link">
            STAFF
          </Link>

          <Link to="#" className="link">
            RESEARCH
          </Link>

          <Link to="#" className="link">
            STUDENT ARENA
          </Link>

          <Link to="#" className="link">
            BLOG
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default NavLinks;
