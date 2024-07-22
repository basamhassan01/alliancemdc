import React, { useState} from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import "./Navbar.css"

function Navbar() {
  
  // Toggle Function
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  }
  
  return (
    <div className='navbar'>
      <div className='navbar-top-info'>
        <div className='item'>
          <FontAwesomeIcon icon={faEnvelope} className='top-icon' /><span>info@alliancemedical.com</span>
        </div>
        <div className='item'>
          <FontAwesomeIcon icon={faPhone} className='top-icon' /><span>(254) 736 992173</span>
        </div>
      </div>
      <div className='navbar-container'>
        <div className='logo'>
          <Link to="/">
            <img src='/images/Logo/Navbar_Logo.png' alt=''/>
          </Link>
        </div>
        <div className='navbar-toggle' onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className='navbar-links'>
            <Link to="/" className='link'><h3>Home</h3></Link>
            <Link to="/about" className='link'><h3>About</h3></Link>
            <Link to="/services" className='link'><h3>Services</h3></Link>
            <Link to="/contact" className='link'><h3>Contact</h3></Link>
        </div>
        <div className='navbar-button'>
          <Link to="/contact"><button>CONNECT WITH US</button></Link>
        </div>

        <div className={`navbar-links none ${isOpen ? 'responsive' : ''}`}>
          <Link to="/" className='link' onClick={closeMenu}><h3>Home</h3></Link>
          <Link to="/about" className='link' onClick={closeMenu}><h3>About</h3></Link>
          <Link to="/services" className='link' onClick={closeMenu}><h3>Services</h3></Link>
          <Link to="/contact" className='link' onClick={closeMenu}><h3>Contact</h3></Link>
          <div className='item'>
            <Link to="/contact" onClick={closeMenu}><button>BOOK APPOINTMENT</button></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar