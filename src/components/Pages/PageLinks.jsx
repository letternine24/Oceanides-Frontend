import React from "react";
import "@styles/Components/PageLinks.css";

const PageLinks = ({ links }) => {
  const listItems = links.map((link) => (
    <li key={link.id} className="page-links-content">
      <a className="page-links-item" href={link.url}>
        {link.title}
      </a>
    </li>
  ));

  return (
    <div className="page-links">
      <ul className="page-links-list">{listItems}</ul>
    </div>
  );
};

export default PageLinks;
