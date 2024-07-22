import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import './Doctors.css'

function Doctors() {
  return (
    <div className='doctors'>
      <div className='doctors-title'>
        <p>Team of consultants</p>
        <h2>Our Professional Doctors</h2>
      </div>
      <div className='doctors-container'>
        <div className='doctors-card'>
          <div className='doctors-image'>
            <img src='/images/Doctors/Physician.jpg' alt='' />
            <div className='icons'>
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
              <FontAwesomeIcon icon={faSquareFacebook} className='icon' />
              <FontAwesomeIcon icon={faSquareInstagram} className='icon' />
            </div>
          </div>
          <div className='doctors-content'>
            <h3>Dr Mathew Lucas</h3>
            <h4>Physician</h4>
            <p>
              Specializes in diagnosing and treating a wide range of adult health issues, focusing
              on comprehensive and preventive care.
            </p>
          </div>
        </div>
        <div className='doctors-card'>
          <div className='doctors-image'>
            <img src='/images/Doctors/GeneralPractitioner.jpg' alt='' />
            <div className='icons'>
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
              <FontAwesomeIcon icon={faSquareFacebook} className='icon' />
              <FontAwesomeIcon icon={faSquareInstagram} className='icon' />
            </div>
          </div>
          <div className='doctors-content'>
            <h3>Dr Benjamin Noah</h3>
            <h4>General Practitioner</h4>
            <p>
              Provides general healthcare services, managing common illness and chronic conditions
              across various settings in our hospital.
            </p>
          </div>
        </div>
        <div className='doctors-card'>
          <div className='doctors-image'>
            <img src='/images/Doctors/OrthopedicSergeon.jpg' alt='' />
            <div className='icons'>
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
              <FontAwesomeIcon icon={faSquareFacebook} className='icon' />
              <FontAwesomeIcon icon={faSquareInstagram} className='icon' />
            </div>
          </div>
          <div className='doctors-content'>
            <h3>Dr Samuel Jacob</h3>
            <h4>Orthopedic Sergeon</h4>
            <p>
              Specializes in the musculoskeletal system, treating conditions related to bones,
              joints and muscles, often through surgery.
            </p>
          </div>
        </div>
        <div className='doctors-card'>
          <div className='doctors-image'>
            <img src='/images/Doctors/Dentist.jpg' alt='' />
            <div className='icons'>
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
              <FontAwesomeIcon icon={faSquareFacebook} className='icon' />
              <FontAwesomeIcon icon={faSquareInstagram} className='icon' />
            </div>
          </div>
          <div className='doctors-content'>
            <h3>Dr Esther Ethan</h3>
            <h4>Dentist</h4>
            <p>
              Focuses on oral health, including routine check-ups, treatments, and preventive
              care for teeth and gums.
            </p>
          </div>
        </div>
        <div className='doctors-card'>
          <div className='doctors-image'>
            <img src='/images/Doctors/Psychiatrist.jpg' alt='' />
            <div className='icons'>
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
              <FontAwesomeIcon icon={faSquareFacebook} className='icon' />
              <FontAwesomeIcon icon={faSquareInstagram} className='icon' />
            </div>
          </div>
          <div className='doctors-content'>
            <h3>Dr Fatima Mohammed</h3>
            <h4>Psychiatrist</h4>
            <p>
              Specializes in mental health, diagnosing and treating disorders like depression,
              anxiety and schizophrenia.
            </p>
          </div>
        </div>
        <div className='doctors-card'>
          <div className='doctors-image'>
            <img src='/images/Doctors/Pediatrician.jpg' alt='' />
            <div className='icons'>
              <FontAwesomeIcon icon={faEnvelope} className='icon' />
              <FontAwesomeIcon icon={faSquareFacebook} className='icon' />
              <FontAwesomeIcon icon={faSquareInstagram} className='icon' />
            </div>
          </div>
          <div className='doctors-content'>
            <h3>Dr Samira Fernandes</h3>
            <h4>Pediatrician</h4>
            <p>
              Provides medical care for infants, children and adolescents, ensuring their growth and development.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors