import React from "react";
import { BiChevronDown } from "react-icons/bi";
import arrowIcon from "../Images/arrow-icon.svg";
function Dropdown() {
  const dropdownItems = [
    {
      item: "Company",
      href: "#",
      subItems: [
        { name: "About", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Newsroom", href: "#" },
      ],
    },
    {
      item: "Resources",
      href: "#",
      subItems: [
        { name: "All Resources", href: "#" },
        { name: "Blogs", href: "#" },
        { name: "Case Studies", href: "#" },
        { name: "Testimonials", href: "#" },
        { name: "Product Newsletter-Nucleus", href: "#" },
      ],
    },
    { item: "Integration", href: "#" },
    { item: "Social Impact", href: "#" },
    { item: "Support", href: "#" },
    { item: "Contact Sales", href: "#" },
    { item: "Login", href: "#" },
  ];
  return (
    <>
    <div className="oulet-container">
      {dropdownItems.map((menuItem) => {
        return (
          <ul>
            <li>
              <a href={menuItem.href} >{menuItem.item}{menuItem.subItems && <BiChevronDown />} </a>
              <div className="sub-menu-2">
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
      </div>
    </>
  );
}

export default Dropdown;
