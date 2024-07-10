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
            <a className="nav-link text-light" href="#">
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
              <li className="dropdown-item dropdown">
                <a
                  className="dropdown-item dropdown-toggle multi-level-dropdown-container"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Trading Account Type
                </a>
                <ul className="dropdown-menu multi-level-dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Standard Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Pro Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Demo Account
                    </a>
                  </li>
                </ul>
              </li>
              <li className="dropdown-divider"></li>
              <li>
                <a className="dropdown-item" href="#">
                  Instruments
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Deposit & Withdrawal
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <a className="nav-link text-light" href="#">
              ABOUT US
            </a>
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
