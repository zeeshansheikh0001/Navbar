import React, { useState } from "react";
import "./Navbar.css";
// import logo from "../Images/freight-tiger-logo.png";
import ftVisibilityIcon from "../Images/ft-visibility.svg";
import ftTmsIcon from "../Images/ft-tms.svg";
import ftDfnIcon from "../Images/ft-dfn.svg";
import { BiChevronDown } from "react-icons/bi";

function Menu() {
  const mobileHeader = [
    {
      id: 1,
      title: "FT Visibility",
      description:
        "Get complete visibility of movement of your trucks and material, easily, and all in one place.",
      link: "#",
      icon: ftTmsIcon,
      alt: "Visibility Icon",
    },
    {
      id: 2,
      title: "FT TMS",
      description:
        "360º management of your freight operations, from procurement to delivery and billing.",
      link: "#",
      icon: ftDfnIcon,
      alt: "Visibility Icon",
    },
    {
      id: 3,
      title: "FT Digital Freight Network",
      description:
        "Matching real time demand to real time access to 4k+ LSPs in the most transparent and neutral manner.",
      link: "#",
      icon: ftVisibilityIcon,
      alt: "Visibility Icon",
    },
    {
      id: 4,
      title: "For LSPs",
      menuItem: [
        { id: 1, title: "FT Visibility for LSPs", link: "#" },
        { id: 2, title: "FT Freight Network for LSPs", link: "#" },
      ],
    },
    {
      id: 5,
      title: "Company",
      menuItem: [
        { id: 1, title: "About", link: "#" },
        { id: 2, title: "Careers", link: "#" },
        { id: 3, title: "Newsroom", link: "#" },
      ],
    },
    {
      id: 6,
      title: "Resources",
      menuItem: [
        { id: 1, title: "All Resources", link: "#" },
        { id: 2, title: "Blog", link: "#" },
        { id: 3, title: "Case Studies", link: "#" },
        { id: 4, title: "Testimonials", link: "#" },
        { id: 5, title: "Product Newsletter - Nucleus", link: "#" },
      ],
    },
  ];
  const [activeMobileMenuId, setActiveMobileMenuId] = useState(false);
  return (
    <>
      <div>
        <div className="outer-container">
          {/* <div className="visible-icon"> */}
          {/* <img src={icon1} className="app-icon1" alt="logo" /> */}
          {/* <div className="styles_text"> */}
          {mobileHeader.map((menuItems) => {
            return (
              <>
                <div className="visible-icon">
                  {menuItems.icon && (
                    <img
                      src={menuItems.icon}
                      className="app-icon1"
                      alt={menuItems.alt}
                    />
                  )}
                  <div className="styles_text">
                    <a
                      href={menuItems.link}
                      onClick={() => {
                        setActiveMobileMenuId(menuItems.id);
                      }}
                    >
                      {menuItems.title}{" "}
                      {menuItems.menuItem && <BiChevronDown />}
                    </a>
                    <div className="styles-text-para">
                      <p>{menuItems.description}</p>
                      {/* </div> */}
                      {menuItems.menuItem &&
                        menuItems.menuItem.map((dropItem) => {
                          return activeMobileMenuId === menuItems.id ? (
                            <ul className="ul_text">
                              <li>{dropItem.title}</li>
                            </ul>
                          ) : null;
                        })}
                    </div>
                  </div>
                </div>
                <div className="styles_divider_"></div>
              </>
            );
          })}
        </div>
        {/* </div> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default Menu;
