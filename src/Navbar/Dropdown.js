import React from "react";
import { BiChevronDown } from "react-icons/bi";
function Dropdown() {
  return (
    <>
      <ul>
        <li>
          <a href="#">
            Company <BiChevronDown />
          </a>
          <div className="sub-menu-2">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Newsroom</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">
            Resources
            <BiChevronDown />
          </a>
          <div className="sub-menu-2">
            <ul>
              <li>
                <a href="#">All Resources</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Case Studies</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Product Newsletter-Nucleus</a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#">Integration</a>
        </li>
        <li>
          <a href="#">Social Impact</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Contact Sales</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </>
  );
}

export default Dropdown;
