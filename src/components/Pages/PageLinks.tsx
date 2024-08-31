import { NavLink } from "react-router-dom";
import "@styles/Components/PageLinks.css";
import { IPageLinks } from "@/interface/components/PageLinks";

const PageLinks: React.FC<IPageLinks> = ({ links, additionalStyles }) => {
  const listItems = links.map((link) => (
    <li key={link.id} className="page-links-content">
      <NavLink
        className={({ isActive }) =>
          `page-links-item ${isActive ? "link-active" : ""}`
        }
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
