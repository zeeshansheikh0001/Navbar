import React, { useState } from 'react'
import './Navbar.css';
import logo from '../Images/freight-tiger-logo.png'
import icon1 from '../Images/ft-visibility.svg';
import icon2 from '../Images/ft-tms.svg';
import icon3 from '../Images/ft-dfn.svg';
import { BiChevronDown } from "react-icons/bi";

 

const Navbar = () => {
  const[showButton,toggleClick]=useState(false);
  const[showButton2,toggleClick2]=useState(false);
  const[showButton3,toggleClick3]=useState(false);

  const handleClick = event => {

    toggleClick(prev => !prev);
    
    toggleClick2(false);
     toggleClick3(false)
  };
  const handleClick1 = event => {
    toggleClick(false);
    toggleClick2(prev => !prev);
     toggleClick3(false)
  };
  const handleClick2 = event => {
    toggleClick(false);
    toggleClick2(false);
     toggleClick3(prev => !prev);
    
  };
    const [activeHam,setActiveHam]=useState(false)
    const upperMenu=(
        <>
        <ul>
            <li><a href='#'>Company <BiChevronDown/></a>
            <div className='sub-menu-2'>
             <ul>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Careers</a></li>
                <li><a href='#'>Newsroom</a></li>
                </ul>
                </div>
                </li>
            <li> <a href='#'>Resources<BiChevronDown/></a>
            <div className='sub-menu-2'>
             <ul>
                <li><a href='#'>All Resources</a></li>
                <li><a href='#'>Blog</a></li>
                <li><a href='#'>Case Studies</a></li>
                <li><a href='#'>Testimonials</a></li>
                <li><a href='#'>Product Newsletter-Nucleus</a></li>
                </ul>
                </div>
            </li>
            <li> <a href='#'>Integration</a></li>
            <li> <a href='#'>Social Impact</a></li>
            <li><a href='#'>Support</a></li>
            <li><a href='#'>Contact Sales</a></li>
            <li><a href='#'>Login</a></li>
        </ul>
        </>
    )
    const menuItems =(
        <ul >
             <li><a href='#'>FT Visibility</a></li>
             <li><a href='#'>FT TMS</a></li>
             <li> <a href='#'>FT Digital Freight Network</a></li>
             <li><a href='#'>For LSPs<BiChevronDown/></a>
             <div className='sub-menu-1'>
             <ul>
                <li><a href='#'>FT Visibilty for LSPs</a></li>
                <li><a href='#'>Ft Frieght Network for LSPs</a></li>
                </ul>
                </div>
                </li>
             <li><a href='#'className='get-demo'>Get a Demo</a></li>
        </ul>
             
    )
    const menuItem =(
        <div>
            <div className='visible-icon' ><img src={icon1}  className="app-icon1" alt="logo" />
             <div className='styles_text'><a href='#'>FT Visibility</a>
             <div className='styles-text-para'>
             <p >Get complete visibility of movement of your trucks and material, easily, and all in one place</p>
             </div>
             </div>
             </div>
             <div className='styles_divider__RXr8s'></div>
             <div className='visible-icon' ><img src={icon2}  className="app-icon1" alt="logo" />
             <div className='styles_text'><a href='#'>FT TMS</a>
             <div className='styles-text-para'>
                <p>360º management of your freight operations, from procurement to delivery and billing.</p>
             </div>
             </div>
             </div>
             <div className='styles_divider__RXr8s'></div>
             <div className='visible-icon' ><img src={icon3}  className="app-icon1" alt="logo" />
             <div className='styles_text'> <a href='#'>FT Digital Freight Network</a>
             <div className='styles-text-para'>
                <p>
                Matching real time demand to real time access to 4k+ LSPs in the most transparent and neutral manner.
                </p>
             </div>
             </div>
             </div>
             <div className='styles_divider__RXr8s'></div>
             <div className='styles_text'>
              <a href='#' onClick={handleClick}>For LSPs</a>
              {showButton ?
              <ul className='ul_text' >
              <li>
                FT Visibility for LSPs
              </li>
              <li>
                FT Freight Network for LSPs
              </li>
             </ul>
              :null}
              </div>
             <div className='styles_divider__RXr8s'></div>
             <div className='styles_text'><a href='#' onClick={handleClick1}>Company</a>
             {showButton2 ?
              <ul className='ul_text' >
              <li>
                About
              </li>
              <li>
              Careers
              </li>
              <li>
             Newsroom
              </li>
             </ul>:null
}
             </div>
             <div className='styles_divider__RXr8s'></div>
             <div className='styles_text'><a href='#' onClick={handleClick2}>Resources</a>
             {showButton3 ?
              <ul className='ul_text' >
              <li>
                About
              </li>
              <li>
              Careers
              </li>
              <li>
             Newsroom
              </li>
             </ul>:null
}</div>
            
        </div>
             
    )
   
  return (
    <div className='navbar-container'>
     
      
        <nav>
            <div className='upper-nav'>{upperMenu}</div>
            <div className='nav-container'>
            <img src={logo}  className="app-logo" alt="logo" />
             <div className='menu'>
                {menuItems}
                </div>
             <button className={activeHam ?'hamburger active-hamburger': 'hamburger'}
             onClick={()=> setActiveHam(!activeHam)}>
                <span></span>
                <span></span>
                <span></span>
             </button>
            </div>
            
        </nav>
      {activeHam && <div className='nav-dropdown'>{menuItem}</div>}
    </div>
  )
}

export default Navbar
