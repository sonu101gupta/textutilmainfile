import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  const homeLinkStyle = {
    textDecoration: "none",
    color: props.mode === "dark" ? "white" : "black" // Set the color based on mode
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TextUtils
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-a" href="#" style={homeLinkStyle}>Home</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-a" href="/About">{props.title}</a>
              </li>
              <li className="nav-item">
                <a className="nav-a" href="/Contact">{props.Contact}</a>
              </li> */}
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary" type="submit">Search</button>
            </form>
            <div className={`form-check form-switch mx-1 text-${props.mode === "light" ? "dark" : "light"}`}>
              <input className="form-check-input mx-1" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label mx-1" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  Contact: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Title here",
  Contact: "Contact",
};
