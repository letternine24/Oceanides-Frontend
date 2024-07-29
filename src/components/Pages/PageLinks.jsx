import React from "react";
import { NavLink } from "react-router-dom";
import "@styles/Components/PageLinks.css";

const PageLinks = ({ links, additionalStyles }) => {
  const listItems = links.map((link) => (
    <li key={link.id} className="page-links-content">
      <NavLink
        className="page-links-item"
        activeClassName="link-active"
        exact
        to={link.url}
        style={{ ...additionalStyles }}
      >
        {link.title}
      </NavLink>
    </li>
  ));

  return (
    <div className="page-links">
      <ul className="page-links-list">{listItems}</ul>
    </div>
  );
};

export default PageLinks;
