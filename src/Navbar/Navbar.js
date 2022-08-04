import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Images/freight-tiger-logo.png";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "./Dropdown";
import Menu from "./Menu";

const Navbar = () => {
  const [activeHam, setActiveHam] = useState(false);
  const menuItems = (
    <ul>
      <li>
        <a href="#">FT Visibility</a>
      </li>
      <li>
        <a href="#">FT TMS</a>
      </li>
      <li>
        {" "}
        <a href="#">FT Digital Freight Network</a>
      </li>
      <li>
        <a href="#">
          For LSPs
          <BiChevronDown />
        </a>
        <div className="sub-menu-1">
          <ul>
            <li>
              <a href="#">FT Visibilty for LSPs</a>
            </li>
            <li>
              <a href="#">Ft Frieght Network for LSPs</a>
            </li>
          </ul>
        </div>
      </li>
      <li>
        <a href="#" className="get-demo">
          Get a Demo
        </a>
      </li>
    </ul>
  );

  return (
    <div className="navbar-container">
      <nav>
        <div className="upper-nav">
          <Dropdown />
        </div>
        <div className="nav-container">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="menu">{menuItems}</div>
          <button
            className={activeHam ? "hamburger active-hamburger" : "hamburger"}
            onClick={() => setActiveHam(!activeHam)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
      {activeHam && (
        <div className="nav-dropdown">
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Navbar;
