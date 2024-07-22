import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircle } from "@fortawesome/free-solid-svg-icons"
import './ServiceHero.css'

function ServiceHero() {
    return (
        <div className='service-hero'>
            <div className='service-hero-title'>
                <h3>Our services cater to individuals at all stages of life.</h3>
                <div className='underline'></div>
                <p>
                    Where compassionate care meets advanced medicine. At our hospital,
                    we are dedicated to providing exceptional healthcare services that prioritize your well-being
                    and comfort. Whether you're visiting for routine check-ups, specialized treatments, or emergency
                    care, our experienced team is here to support you every step of the way.
                </p>
            </div>
            <div className='service-hero-container'>
                <div className='service-hero-card'>
                    <div className='image'>
                        <img src='/images/Service/Medical.jpg' alt='' />
                    </div>
                    <div className='content'>
                        <h4>Medical Services</h4>
                        <div className='line'></div>
                        <p>
                            At <strong>Alliance Medical Centre</strong>, we offer a comprehensive range of medical
                            specialties and treatmentsdelivered by skilled physicians and specialists. From primary
                            care to advanced surgical procedures, our healthcare professionals are committed to delivering
                            high-quality, patient-centered care. Whether you require ongoing management of chronic
                            conditions or specialized treatment plans, we tailor our services to meet your individual
                            healthcare needs.
                        </p>
                    </div>
                </div>
                <div className='service-hero-card'>
                    <div className='image'>
                        <img src='/images/Service/Customer.jpg' alt='' />
                    </div>
                    <div className='content'>
                        <h4>Customer Services</h4>
                        <div className='line'></div>
                        <p>
                            Our dedicated customer service team ensures that your experience with us is seamless and
                            stress-free. From scheduling appointments to answering billing inquiries, our friendly staff
                            is committed to providing you with prompt and personalized assistance. We prioritize clear
                            communication and patient satisfaction, ensuring that your needs are met efficiently.
                        </p>
                    </div>
                </div>
                <div className='service-hero-card'>
                    <div className='image'>
                        <img src='/images/Service/Diagnostic.jpg' alt='' />
                    </div>
                    <div className='content'>
                        <h4>Diagnostic Services</h4>
                        <div className='line'></div>
                        <p>
                            Accurate diagnosis is the foundation of effective medical treatment. Our hospital is equipped with
                            state-of-the-art diagnostic technologies and advanced laboratory services, including:
                        </p>
                        <span><FontAwesomeIcon icon={faCircle} className='icon' />MRI (Magnetic Resonance Imaging)</span>
                        <span><FontAwesomeIcon icon={faCircle} className='icon' />CT scan (Computed Tomography)</span>
                        <span><FontAwesomeIcon icon={faCircle} className='icon' />X-Ray</span>
                        <span><FontAwesomeIcon icon={faCircle} className='icon' />laboratory</span>
                        <span className='last'><FontAwesomeIcon icon={faCircle} className='icon' />Ultrasound</span>
                        <p>
                            Our dedicated team of diagnostic experts ensures precise and timely results using these advanced technologies
                            to support our medical professionals in making informed decisions about your health.
                        </p>
                    </div>
                </div>
                <div className='service-hero-card'>
                    <div className='image'>
                        <img src='/images/Service/Emergency.jpg' alt='' />
                    </div>
                    <div className='content'>
                        <h4>Emergency Services</h4>
                        <div className='line'></div>
                        <p>
                            Medical emergencies require immediate attention and expert care. Our emergency services department operates around 
                            the clock to provide rapid response and compassionate care in critical situations. Our skilled emergency medical team 
                            is trained to handle a wide range of urgent medical conditions, ensuring that you receive prompt evaluation, treatment, 
                            and stabilization when every second counts.
                        </p>
                    </div>
                </div>
                <div className='service-hero-card'>
                    <div className='image'>
                        <img src='/images/Service/Insurance.jpg' alt='' />
                    </div>
                    <div className='content'>
                        <h4>Insurance Services</h4>
                        <div className='line'></div>
                        <p>
                            Navigating insurance coverage is made simpler at <strong>Alliance Medical Centre</strong>. We work with major
                            insurance providers to ensure that you have access to comprehensive coverage options. Our partnerships include:
                        </p>
                        <span><FontAwesomeIcon icon={faCircle} className='icon' />NHIF (National Hospital Insurance Fund)</span>
                        <span><FontAwesomeIcon icon={faCircle} className='icon' />APA Insurance</span>
                        <span><FontAwesomeIcon icon={faCircle} className='icon' />MetLife Insurance</span>
                        <span className='last'><FontAwesomeIcon icon={faCircle} className='icon' />Allianz Insurance</span>
                        <p>
                            Whether you are covered by these providers or have questions about your insurance benefits, our insurance services 
                            team is here to assist you. We prioritize transparency and accuracy in billing, making sure that your healthcare 
                            experience is as smooth and hassle-free as possible.
                        </p>
                    </div>
                </div>
            </div>
            <div className='service-hero-title bottom'>
                <h3>We'd Love to Serve Your Team</h3>
                <div className='underline'></div>
                <p>
                    We cherish the opportunity to collaborate with various organizations to foster community health and well-being. Whether you 
                    represent a business, residential community, or any other group, we're here to support your efforts in promoting a healthier community.
                </p>
                <br />
                <p>
                    Our focus is on helping individuals navigate their healthcare needs, ensuring they understand their benefits and have access 
                    to exceptional care. <Link to="/contact" className='link'>Let's explore how we can work together to empower our community with better health outcomes.</Link>
                </p>
            </div>
        </div>
    )
}

export default ServiceHero