import React from 'react'
import SemiHero from '../../components/SemiHero/SemiHero'
import AboutUs from '../../components/AboutUs/AboutUs'
import Doctors from '../../components/Doctors/Doctors'

function About() {
  return (
    <div className='about'>
      <SemiHero
        type="About Us /"
        imageSource="/images/Semi_Hero/About.jpg"
      />
      <AboutUs />
      <Doctors />
    </div>
  )
}

export default About