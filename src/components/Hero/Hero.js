import React from 'react'
import { Link } from 'react-router-dom'
import "./Hero.css"

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-container'>
        <div className='hero-content'>
          <h2><span>YOUR</span> Wellness is Our Passion</h2>
          <p>
          Welcome to our healthcare hub! At our center, we're devoted to delivering exceptional 
          medical attention and services to our valued visitors. Our seasoned and empathetic 
          healthcare experts are devoted to safeguarding your health and journey to wellness. 
          Explore our platform to discover more about our offerings, amenities, and dedicated 
          team. We appreciate your decision to entrust us with your healthcare requirements.
          <br /><br />
          <Link to='/about' className='link'><span>Learn More</span></Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero