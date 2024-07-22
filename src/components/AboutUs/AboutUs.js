import React from 'react'
import './AboutUs.css'

function AboutUs() {
  return (
    <div className='about-us'>
      <div className='about-us-container'>
        <div className='first-row'>
          <h5>Our History</h5>
          <p>
            Founded in 1983, <strong className='name'>Alliance Medical Centre</strong> has been an integral part of Mombasa's healthcare
            landscape for 41 years. Originally established as a small clinic to cater to the healthcare needs of
            the local community, our hospital has grown steadily over the decades.
          </p>
          <p>
            From its humble beginnings, <strong className='name'>Alliance Medical Centre</strong> has expanded its facilities and services to become a leading healthcare
            provider in the region. We have continually invested in state-of-the-art medical technology and recruited top-tier
            medical professionals to ensure we deliver the highest standards of care to our patients.
          </p>
          <p>
            Throughout our history, we have remained dedicated to our mission of providing compassionate and personalized
            services. Our commitment to excellence in healthcare has earned us the trust and loyalty of our patients and the respect of
            our peers in the medical community.
          </p>
          <p>
            As we look to the future, <strong className='name'>Alliance Medical Centre</strong> remains steadfast in our commitment to advancing healthcare, embracing innovation, and
            meeting the evolving needs of our community with warmth, compassion, and clinical expertise.
          </p>
        </div>
        <div className='second-row'>
          <div className='left'>
            <img src='/images/Hospital_Display/AboutUs.png' alt='' className='none' />
          </div>
          <div className='right'>
            <h5>Our Mission</h5>
            <p>
              At <strong className='name'>Alliance Medical Centre</strong>, our mission is to provide exceptional healthcare services with compassion and integrity. We are committed
              to delivering patient-centered care that promotes wellness, prevents illness, and restores health through innovative practices
              and personalized treatment plans. Our dedicated team of healthcare professionals strives to exceed expectations, ensuring every
              patient receives the highest quality care in a supportive and respectful environment.
            </p>
            <br />
            <h5 className='none'>Our Vision</h5>
            <p className='none'>To be the healthcare provider of choice in Mombasa Kenya, recognized for our commitment to excellence, innovation, and patient
              satisfaction. We envision a future where <strong className='name'>Alliance Mediacl Centre</strong> continues to lead in healthcare innovation, setting new standards of excellence in medical
              care, education, and research. Through collaboration and continuous improvement, we aim to enhance the health and well-being of our community,
              empowering individuals to live healthier, happier lives.
            </p>
          </div>
        </div>
        <div className='first-row'>
          <h5 className='responsive heading'>Our Vision</h5>
          <p className='responsive'>To be the healthcare provider of choice in Mombasa Kenya, recognized for our commitment to excellence, innovation, and patient
            satisfaction. We envision a future where <strong className='name'>Alliance Mediacl Centre</strong> continues to lead in healthcare innovation, setting new standards of excellence in medical
            care, education, and research. Through collaboration and continuous improvement, we aim to enhance the health and well-being of our community,
            empowering individuals to live healthier, happier lives.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs