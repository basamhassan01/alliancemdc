import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserDoctor, faUsers, faBedPulse, faHospital } from "@fortawesome/free-solid-svg-icons"
import './Statistics.css'

function Statistics() {
  return (
    <div className='statistics'>
        <div className='statistics-container'>
            <div className='statistics-content'>
                <FontAwesomeIcon icon={faUserDoctor} className='icon' />
                <h3>110+</h3>
                <p>Doctors at Work</p>
            </div>
            <div className='statistics-content'>
                <FontAwesomeIcon icon={faUsers} className='icon' />
                <h3>1050+</h3>
                <p>Satisfied Patients</p>
            </div>
            <div className='statistics-content'>
                <FontAwesomeIcon icon={faBedPulse} className='icon' />
                <h3>400+</h3>
                <p>Bed Facilities</p>
            </div>
            <div className='statistics-content'>
                <FontAwesomeIcon icon={faHospital} className='icon' />
                <h3>30+</h3>
                <p>Available Hospitals</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics