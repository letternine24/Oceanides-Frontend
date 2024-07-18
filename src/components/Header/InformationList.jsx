// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";
// import "@styles/Components/PageLinks.css";

// // Array of navigation links with id
// const navLinks = [
//   { id: 1, title: "TRADING", url: "/" },
//   { id: 2, title: "PLATFORM", url: "/platform" },
//   {
//     id: 3,
//     title: "TRADING TOOLS",
//     url: "#",
//     subLinks: [
//       { id: 31, title: "Economic Calendar", url: "/economic-calendar" },
//       { id: 32, title: "Trading Calculator", url: "/trading-calculator" },
//       { id: 33, title: "All in One", url: "/all-in-one" },
//       { id: 34, title: "Currency", url: "/currency" },
//       { id: 35, title: "Pip Value", url: "/pip-value" },
//       { id: 36, title: "Margin", url: "/margin" },
//       { id: 37, title: "Swaps", url: "/swaps" },
//       { id: 38, title: "Profit & Loss", url: "/profit-loss" },
//       { id: 39, title: "Market News", url: "/market-news" },
//     ],
//   },
//   {
//     id: 4,
//     title: "ABOUT US",
//     url: "/about-us",
//     subLinks: [
//       { id: 41, title: "Who & Why Corsa Futures", url: "/about-us" },
//       {
//         id: 42,
//         title: "Regulatory Supervision",
//         url: "/regulatory-supervision",
//       },
//       { id: 43, title: "Legal Documents", url: "/legal-documents" },
//       { id: 44, title: "Privacy Policy", url: "/privacy-policy" },
//       { id: 45, title: "Contact Us", url: "/contact-us" },
//     ],
//   },
//   { id: 5, title: "SIGNUP", url: "#" },
// ];

// const InformationList = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const navbar = document.querySelector(".navbar");
//       if (window.scrollY > 0) {
//         navbar.classList.add("scrolled");
//       } else {
//         navbar.classList.remove("scrolled");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const dropdowns = document.querySelectorAll(".dropdown");

//     dropdowns.forEach((dropdown) => {
//       dropdown.addEventListener("mouseenter", function () {
//         const submenu = this.querySelector(".dropdown-menu");
//         if (submenu) {
//           submenu.classList.add("show");
//         }
//       });

//       dropdown.addEventListener("mouseleave", function () {
//         const submenu = this.querySelector(".dropdown-menu");
//         if (submenu) {
//           submenu.classList.remove("show");
//         }
//       });
//     });

//     return () => {
//       dropdowns.forEach((dropdown) => {
//         dropdown.removeEventListener("mouseenter", () => {
//           dropdown.querySelector(".dropdown-menu").classList.add("show");
//         });
//         dropdown.removeEventListener("mouseleave", () => {
//           dropdown.querySelector(".dropdown-menu").classList.remove("show");
//         });
//       });
//     };
//   }, []);

//   return (
//     <nav className="navbar navbar-expand-lg float-end mt-3">
//       <div className="collapse navbar-collapse" id="navbarText">
//         <ul className="navbar-nav mr-auto">
//           {navLinks && navLinks.map((link) => (
//             <li
//               key={link.id}
//               className={`nav-item ${link.subLinks ? "dropdown" : ""}`}
//             >
//               {link.subLinks ? (
//                 <>
//                   <Link
//                     to={link.url}
//                     className="nav-link dropdown-toggle text-light"
//                     activeClassName="active"
//                     aria-expanded="false"
//                   >
//                     {link.title}
//                   </Link>
//                   {/* <ul className="dropdown-menu multi-level-dropdown">
//                     {link.subLinks.map((subLink) => (
//                       <li key={subLink.id}>
//                         <Link
//                           to={subLink.url}
//                           className="dropdown-item"
//                           activeClassName="active"
//                         >
//                           {subLink.title}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul> */}
//                 </>
//               ) : (
//                 <Link
//                   to={link.url}
//                   className="nav-link text-light"
//                   activeClassName="active"
//                   exact={link.url === "/"}
//                 >
//                   {link.title}
//                 </Link>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default InformationList;



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
          <li className="nav-item dropdown">
            <a href="/trading-account-type" className="nav-link dropdown-toggle text-light" aria-expanded="false">
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
                  // data-bs-toggle="dropdown"
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
