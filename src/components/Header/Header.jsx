import "@styles/Header/Header.css";
import InformationList from "./InformationList";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".corsa_header");
      if (window.scrollY > 0) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="corsa_header">
      <div className="header_main container_wrap container_wrap_logo">
        <div className="container">
          <div className="inner-container">
            <div className="d-inline">
              <span className="logo avia-standard-logo">
                <a href="/">
                  <img src="/images/corsa-logo.png" alt="corsa-logo" />
                </a>
              </span>
              <InformationList />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
