import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Images/freight-tiger-logo.png";
import icon1 from "../Images/ft-visibility.svg";
import icon2 from "../Images/ft-tms.svg";
import icon3 from "../Images/ft-dfn.svg";

function Menu() {
  const [showButton, toggleClick] = useState(false);
  const [showButton2, toggleClick2] = useState(false);
  const [showButton3, toggleClick3] = useState(false);

  const handleClick = (event) => {
    toggleClick((prev) => !prev);

    toggleClick2(false);
    toggleClick3(false);
  };
  const handleClick1 = (event) => {
    toggleClick(false);
    toggleClick2((prev) => !prev);
    toggleClick3(false);
  };
  const handleClick2 = (event) => {
    toggleClick(false);
    toggleClick2(false);
    toggleClick3((prev) => !prev);
  };
  return (
    <div>
      <div className="visible-icon">
        <img src={icon1} className="app-icon1" alt="logo" />
        <div className="styles_text">
          <a href="#">FT Visibility</a>
          <div className="styles-text-para">
            <p>
              Get complete visibility of movement of your trucks and material,
              easily, and all in one place
            </p>
          </div>
        </div>
      </div>
      <div className="styles_divider_"></div>
      <div className="visible-icon">
        <img src={icon2} className="app-icon1" alt="logo" />
        <div className="styles_text">
          <a href="#">FT TMS</a>
          <div className="styles-text-para">
            <p>
              360º management of your freight operations, from procurement to
              delivery and billing.
            </p>
          </div>
        </div>
      </div>
      <div className="styles_divider_"></div>
      <div className="visible-icon">
        <img src={icon3} className="app-icon1" alt="logo" />
        <div className="styles_text">
          <a href="#">FT Digital Freight Network</a>
          <div className="styles-text-para">
            <p>
              Matching real time demand to real time access to 4k+ LSPs in the
              most transparent and neutral manner.
            </p>
          </div>
        </div>
      </div>
      <div className="styles_divider_"></div>
      <div className="styles_text">
        <a href="#" onClick={handleClick}>
          For LSPs
        </a>
        {showButton ? (
          <ul className="ul_text">
            <li>FT Visibility for LSPs</li>
            <li>FT Freight Network for LSPs</li>
          </ul>
        ) : null}
      </div>
      <div className="styles_divider_"></div>
      <div className="styles_text">
        <a href="#" onClick={handleClick1}>
          Company
        </a>
        {showButton2 ? (
          <ul className="ul_text">
            <li>About</li>
            <li>Careers</li>
            <li>Newsroom</li>
          </ul>
        ) : null}
      </div>
      <div className="styles_divider_"></div>
      <div className="styles_text">
        <a href="#" onClick={handleClick2}>
          Resources
        </a>
        {showButton3 ? (
          <ul className="ul_text">
            <li>About</li>
            <li>Careers</li>
            <li>Newsroom</li>
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Menu;
