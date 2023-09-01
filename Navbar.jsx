import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './index.module.css';
import logoImg from "../src/Image/lo.png"

const Navbar = () => {
  const location = useLocation();

  // Function to determine if a NavLink is active
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className={`${styles['container-fluid']} ${styles.nav_bg} fixed-top`}>
      <div className="row">
        <div className="col-12 mx-auto">
          <nav className={`navbar navbar-expand-lg ${styles.navbar} bg-body-tertiary`}>
            <div className={`container-fluid ${styles['container-fluid']}`}>
              <NavLink className={`${styles['navbar-brand']} `} to="/">
                <img src={logoImg} className={styles.logo} alt='Logo' />
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className={`collapse navbar-collapse ${styles['navbar-collapse']}`} id="navbarSupportedContent">
                <ul className={`navbar-nav ms-auto mb-2 mb-lg-0`}>
                  <li className="nav-item">
                    <NavLink
                      end
                      className={(navData) =>
                        isActiveLink('/') ? `${styles['menu-active']} nav-link` : 'nav-link'
                      }
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={(navData) =>
                        isActiveLink('/upload') ? `${styles['menu-active']} nav-link` : 'nav-link'
                      }
                      aria-current="page"
                      to="/upload"
                    >
                      AQI
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={(navData) =>
                        isActiveLink('/about') ? `${styles['menu-active']} nav-link` : 'nav-link'
                      }
                      aria-current="page"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className={(navData) =>
                        isActiveLink('/login') ? `${styles['menu-active']} nav-link` : 'nav-link'
                      }
                      aria-current="page"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;