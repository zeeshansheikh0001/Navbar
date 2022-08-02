import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Images/freight-tiger-logo.png";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "./Dropdown";
import Menu from "./Menu";

const Navbar = () => {
  const [activeHam, setActiveHam] = useState(false);
  const newMenuItems = [
    { item: "FT Visibility", href: "#" },
    { item: "FT TMS", href: "#" },
    { item: "FT Digital Freight Network", href: "#" },
    {
      item: "For LSPs",
      href: "#",
      subItems: [
        { name: "FT Visibilty for LSPs", href: "#" },
        { name: "FT Frieght Network for LSPs", href: "#" },
      ],
    },
  ];
  return (
    <div className="navbar-container">
      <nav>
        <div className="upper-nav">
          <Dropdown />
        </div>
        <div className="nav-container">
          <img src={logo} className="app-logo" alt="logo" />
          <div className="menu">
            {/* {menuItems} */}
            {newMenuItems.map((menuItem) => {
              return (
                <ul>
                  <li>
                    <a href={menuItem.href}>{menuItem.item}{menuItem.subItems && <BiChevronDown/>}</a>
                    <div className="sub-menu-1">
                      {menuItem.subItems &&
                        menuItem.subItems.map((subItem) => {
                          return (
                            <ul>
                              <li>
                                <a href={subItem.href}>{subItem.name}</a>
                              </li>
                            </ul>
                          );
                        })}
                    </div>
                  </li>
                </ul>
              );
            })}
            <ul>
              <li>
                <a href="#" className="get-demo">
                  Get a Demo
                </a>
              </li>
            </ul>
          </div>
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
