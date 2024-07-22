import React, { useRef } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faSquareFacebook, faSquareInstagram } from "@fortawesome/free-brands-svg-icons"
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import './ContactForm.css'

function ContactForm() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7pwylmw', 'template_jdxhuqp', form.current, {
                publicKey: '60iV_6HqkFowu6xGa',
            })
            .then(
                () => {
                    Swal.fire("Sent Successfully!");
                },
                (error) => {
                    Swal.fire("Oops! Something went wrong!");
                },
            );
        e.target.reset()
    };

    return (
        <div className='contact-form'>
            <div className='contact-form-container'>
                <div className='contact-col left'>
                    <div className='contact-title'>
                        <h2>Contact Us</h2>
                        <p>
                            Connect with our compassionate staff for individualized assistance.
                            Reach out today to access top-tier care and guidance.
                        </p>
                    </div>
                    <div className='contact-info'>
                        <div className='contact-info-group'>
                            <div className='contact-icon'>
                                <FontAwesomeIcon icon={faLocationDot} className='icon' />
                            </div>
                            <div className='contact-details'>
                                <span className='sub-heading'>Location</span>
                                <span className='text'>567 Digo road,</span>
                                <span className='text'>Mombasa, Makadara</span>
                            </div>
                        </div>
                        <div className='contact-info-group'>
                            <div className='contact-icon'>
                                <FontAwesomeIcon icon={faPhone} className='icon' />
                            </div>
                            <div className='contact-details'>
                                <span className='sub-heading'>Phone</span>
                                <span className='text'>(254) 736 992173</span>
                            </div>
                        </div>
                        <div className='contact-info-group'>
                            <div className='contact-icon'>
                                <FontAwesomeIcon icon={faEnvelope} className='icon' />
                            </div>
                            <div className='contact-details'>
                                <span className='sub-heading'>Email</span>
                                <span className='text'>info@alliancemedical.com</span>
                            </div>
                        </div>
                    </div>
                    <div className='contact-social-media'>
                        <FontAwesomeIcon icon={faSquareFacebook} className='icon' />
                        <FontAwesomeIcon icon={faSquareInstagram} className='icon' />
                    </div>
                </div>
                <div className='contact-col right'>
                    <form className='contact-form-input' onSubmit={sendEmail} ref={form}>
                        <div className='contact-input half'>
                            <input type='text' name='user_name' placeholder='Your Name' required='required' />
                            <label>Your Name</label>
                        </div>
                        <div className='contact-input half'>
                            <input type='email' name='user_email' placeholder='Your Email' required='required' />
                            <label>Your Email</label>
                        </div>
                        <div className='contact-input full'>
                            <input type='text' name='subject' placeholder='Subject' required='required' />
                            <label>Subject</label>
                        </div>
                        <div className='contact-input full'>
                            <textarea name='message' placeholder='Your Message' required='required' />
                            <label>Your Message</label>
                        </div>
                        <div className='contact-input full'>
                            <button type='submit'>Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm