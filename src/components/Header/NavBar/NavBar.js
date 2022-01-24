import React from "react";
import "./NavBar.scss";
import { Link } from "gatsby";

const NavBar = () => {
  const links = [
    {
      name: "Notes",
      url: "/notes",
    },
    {
      name: "Photos",
      url: "/photos",
    },
    {
      name: "About",
      url: "/about",
    },
  ];

  return (
    <nav>
      <ul>
        {links.map((l) => (
          <li key={l.url}>
            <Link to={l.url}>{l.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
