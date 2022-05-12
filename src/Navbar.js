import React from "react";
import "./Navbar.css";
import logo from "./assets/images/logo-header.svg";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  return (
    <header className="header" id="header">
      <a href="/" className="logo_link">
        <img className="logo_img" src={logo} alt="Enterprise League Logo" />
      </a>
      <div className="header_navigation">
        <ul className="header_items">
          <li className="header_item">
            <a href="/" className="dropdown-btn">
              <span className="navigator-txt">Products</span>
              <KeyboardArrowDownIcon />
            </a>
          </li>
          <li className="header_item">
            <a href="/" className="dropdown-btn">
              <span className="navigator-txt">Resources</span>
              <KeyboardArrowDownIcon />
            </a>
          </li>
          <li className="header_item">
            <a href="/" className="dropdown-btn">
              <span className="navigator-txt">Company</span>
              <KeyboardArrowDownIcon />
            </a>
          </li>
        </ul>
        <div className="nav_items-right">
          <li className="header_item" id="login-btn-container">
            <a className="login-btn" href="/">
              Log in
            </a>
          </li>
          <li className="header_item">
            <a className="btn-contained">Get started</a>
          </li>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
