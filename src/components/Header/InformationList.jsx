import { useEffect } from "react";

const InformationList = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", function () {
        const submenu = this.querySelector(".dropdown-menu");
        if (submenu) {
          submenu.classList.add("show");
        }
      });

      dropdown.addEventListener("mouseleave", function () {
        const submenu = this.querySelector(".dropdown-menu");
        if (submenu) {
          submenu.classList.remove("show");
        }
      });
    });

    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.removeEventListener("mouseenter", () => {
          dropdown.querySelector(".dropdown-menu").classList.add("show");
        });
        dropdown.removeEventListener("mouseleave", () => {
          dropdown.querySelector(".dropdown-menu").classList.remove("show");
        });
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg float-end mt-3">
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link text-light" href="#">
              TRADING
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-light" href="/platform">
              PLATFORM
            </a>
          </li>

          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle text-light"
              aria-expanded="false"
            >
              TRADING TOOLS
            </a>
            <ul className="dropdown-menu multi-level-dropdown">
              <li>
                <a className="dropdown-item" href="/economic-calendar">
                  Economic Calendar
                </a>
              </li>
              <li className="dropdown-item dropdown">
                <a
                  className="dropdown-item dropdown-toggle multi-level-dropdown-container"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Trading Calculator
                </a>
                <ul className="dropdown-menu multi-level-dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/all-in-one">
                      All in One
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Currency
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pip Value
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Margin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Swaps
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profit & Loss
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="dropdown-item" href="/market-news">
                  Market News
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-light"
              aria-expanded="false"
              href="/about-us"
            >
              ABOUT US
            </a>
            <ul className="dropdown-menu multi-level-dropdown">
              <li>
                <a className="dropdown-item" href="/about-us">
                  Who & Why Corsa Futures
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/regulatory-supervision">
                  Regulatory Supervision
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/legal-documents">
                  Legal Docuements
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/contact-us">
                  Contact Us
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              SIGNUP
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default InformationList;
