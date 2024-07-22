import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHandHoldingHeart, faHandshake, faUserDoctor } from "@fortawesome/free-solid-svg-icons"
import './Factors.css'

function Factors() {
    return (
        <div className='factors'>
            <div className='factors-title-section none'>
                <h2>What factors recommend us?</h2>
                <p>
                    With an unwavering dedication to your welfare, our team of extensively
                    trained healthcare experts guarantees nothing but extraordinary care.</p>
            </div>
            <div className='factors-container'>
                <div className='factors-image'>
                    <img src='/images/Hospital_Display/Factors_Doctor.png' alt='' />
                    <div className='image-background'></div>
                </div>
                <div className='factors-content'>
                    <div className='factors-title-section responsive'>
                        <h2>What factors recommend us?</h2>
                        <p>
                            With an unwavering dedication to your welfare, our team of extensively
                            trained healthcare experts guarantees nothing but extraordinary care.</p>
                    </div>
                    <div className='factors-section'>
                        <FontAwesomeIcon icon={faHandHoldingHeart} className='icon' />
                        <div className='factors-description'>
                            <h4>Exceptional Care</h4>
                            <p>
                                Our hospital is dedicated to exceptional patient care. Our team guarantees compassionate,
                                personalized support throughout your journey, from diagnosis to recovery.</p>
                        </div>
                    </div>
                    <div className='factors-section'>
                        <FontAwesomeIcon icon={faUserDoctor} className='icon' />
                        <div className='factors-description'>
                            <h4>Specialized Expertise</h4>
                            <p>
                                Our highly skilled specialists provide specialized care across various medical disciplines.
                                Trust in our expertise for routine check-ups or complex procedures tailored to your needs..</p>
                        </div>
                    </div>
                    <div className='factors-section'>
                        <FontAwesomeIcon icon={faHandshake} className='icon' />
                        <div className='factors-description'>
                            <h4>Patient-Centered Approach</h4>
                            <p>
                                We prioritize patients, valuing your input and preferences. Our patient-centered approach ensures
                                your involvement in every healthcare decision, aligning our care with your unique needs and values.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Factors