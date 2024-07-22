import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocationDot, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-top-container'>
        <div className='footer-content-card'>
          <div className='logo'>
            <Link to="/">
              <img src='/images/Logo/Navbar_Logo.png' alt='' />
            </Link>
          </div>
          <div className='details'>
            <h3>NewsLetter</h3>
            <p>Stay informed with our hospital's latest updates.</p>
          </div>
          <form className='input-form'>
            <input type='email' id='email' name='email' placeholder='Enter your email' />
            <FontAwesomeIcon icon={faArrowRight} className='input-icon' />
          </form>
          <div className='social-icons'>
            <FontAwesomeIcon icon={faSquareFacebook} className='icon' />
            <FontAwesomeIcon icon={faSquareInstagram} className='icon' />
          </div>
        </div>
        <div className='footer-content-card footer-links'>
          <h3>Pages</h3>
          <div className='footer-links'>
            <Link to='/' className='link'><span>Home</span></Link>
            <Link to='/about' className='link'><span>About</span></Link>
            <Link to='/services' className='link'><span>Services</span></Link>
            <Link to='/contact' className='link'><span>Contact</span></Link>
          </div>
        </div>
        <div className='footer-content-card footer-links left top'>
          <h3>Department</h3>
          <div className='footer-links'>
            <Link to='/services' className='link'><span>Out Patient</span></Link>
            <Link to='/services' className='link'><span>Dental</span></Link>
            <Link to='/services' className='link'><span>Laboratory</span></Link>
            <Link to='/services' className='link'><span>Pharmacy</span></Link>
          </div>
        </div>
        <div className='footer-content-card footer-links top'>
          <h3>Contact</h3>
          <div className='footer-contact'>
            <div className='item'>
              <FontAwesomeIcon icon={faLocationDot} className='icon' />
              <div className='info'>
                <h5>Address</h5>
                <span>567 Digo road,<br /> Mombasa, Makadara</span>
              </div>
            </div>
            <div className='item'>
              <FontAwesomeIcon icon={faPhone} className='icon' />
              <div className='info'>
                <h5>Phone</h5>
                <span>(254) 736 992173</span>
              </div>
            </div>
            <div className='item'>
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
              <div className='info'>
                <h5>Email</h5>
                <span className='email'>info@alliancemedical.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom-container'>
        <div className='footer-copyright'>
          <p>All Rights Reserved. &copy;CopyRight 2024 <Link to="/" className='link'><span className='anchor'>ALLIANCE MEDICAL CENTER</span></Link></p>
          <p>Design by: <span className='brand'>Basam Simplified Technology</span></p>
        </div>
      </div>
    </div>
  )
}

export default Footer