import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faSuitcaseMedical, faStethoscope, faHeartPulse, faUsers, faLeaf } from "@fortawesome/free-solid-svg-icons"
import './Features.css'

function Features() {
  return (
    <div className='features'>
        <div className='features-container'>
            <div className='features-content-card light-shade'>
                <FontAwesomeIcon icon={faClock} className='features-icon'/>
                <div className='details'>
                    <h3>24 Hours Services</h3>
                    <p>
                        Discover how our hospital ensures continuous care with 
                        round-the-clock services, catering to diverse healthcare 
                        needs with a dedicated team of professionals.
                    </p>
                </div>
            </div>
            <div className='features-content-card dark-shade responsive'>
                <FontAwesomeIcon icon={faStethoscope} className='features-icon'/>
                <div className='details'>
                    <h3>Professional Staff</h3>
                    <p>
                        Meet the heart of our hospital—the compassionate and skilled 
                        professionals dedicated to delivering exceptional care tailored 
                        to each patient's needs.  
                    </p>
                </div>
            </div>
            <div className='features-content-card base-color'>
                <FontAwesomeIcon icon={faSuitcaseMedical} className='features-icon'/>
                <div className='details'>
                    <h3>Emergency Care</h3>
                    <p>
                        Explore our hospital's rapid-response emergency care, equipped with 
                        state-of-the-art facilities and highly trained staff committed 
                        to patient safety and well-being.
                    </p>
                </div>
            </div>
            <div className='features-content-card dark-shade'>
                <FontAwesomeIcon icon={faHeartPulse} className='features-icon'/>
                <div className='details'>
                    <h3>Specialized Treatment Centers</h3>
                    <p>
                        Explore our hospital's specialized centers in cardiology, oncology, and 
                        neurology, providing advanced care through cutting-edge technologies and 
                        expert teams.
                    </p>
                </div>
            </div>
            <div className='features-content-card base-color responsive'>
                <FontAwesomeIcon icon={faUsers} className='features-icon'/>
                <div className='details'>
                    <h3>Patient-Centered Care</h3>
                    <p>
                        Learn how we prioritize individual patient needs, preferences, and values 
                        to deliver personalized and holistic care experiences.  
                    </p>
                </div>
            </div>
            <div className='features-content-card light-shade'>
                <FontAwesomeIcon icon={faLeaf} className='features-icon'/>
                <div className='details'>
                    <h3>Community Health Initiatives</h3>
                    <p>
                        Discover our hospital's commitment to community health through outreach programs, 
                        workshops, and partnerships focused on promoting wellness and preventive care.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Features