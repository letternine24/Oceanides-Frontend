import React, { useEffect } from "react";

const InformationList: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector<HTMLDivElement>(".navbar");
      if (window.scrollY > 0) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const dropdowns = document.querySelectorAll<HTMLLIElement>(".dropdown");

    dropdowns.forEach((dropdown) => {
      const handleMouseEnter = () => {
        const submenu =
          dropdown.querySelector<HTMLUListElement>(".dropdown-menu");
        if (submenu) {
          submenu.classList.add("show");
        }
      };

      const handleMouseLeave = () => {
        const submenu =
          dropdown.querySelector<HTMLUListElement>(".dropdown-menu");
        if (submenu) {
          submenu.classList.remove("show");
        }
      };

      dropdown.addEventListener("mouseenter", handleMouseEnter);
      dropdown.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        dropdown.removeEventListener("mouseenter", handleMouseEnter);
        dropdown.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg float-end mt-3">
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <a
              href="/trading-account-type"
              className="nav-link dropdown-toggle text-light"
              aria-expanded="false"
            >
              TRADING
            </a>
            <ul className="dropdown-menu multi-level-dropdown">
              <li>
                <a className="dropdown-item" href="/trading-account-type">
                  Trading Account Type
                </a>
              </li>
              <li className="dropdown-item dropdown">
                <a
                  className="dropdown-item dropdown-toggle multi-level-dropdown-container"
                  href="/instruments"
                >
                  Instruments
                </a>
                <ul className="dropdown-menu multi-level-dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/forex">
                      Forex
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/stocks">
                      Stocks
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/indices">
                      Indices
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/precious-metals">
                      Precious Metals
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/energies">
                      Energies
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/commodities">
                      Commodities
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/cryptocurrencies">
                      Cryptocurrencies
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a className="dropdown-item" href="/deposit-withdrawal">
                  Deposit & Withdrawal
                </a>
              </li>
            </ul>
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
                    <a className="dropdown-item" href="/currency">
                      Currency
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/pip-value">
                      Pip Value
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/margin">
                      Margin
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/swaps">
                      Swaps
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/profit-loss">
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
                  Legal Documents
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
            <a className="nav-link text-light" href="/login">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default InformationList;
