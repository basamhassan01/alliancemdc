import React from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'
import SemiHero from '../../components/SemiHero/SemiHero'

function Contact() {
  return (
    <div className='contact'>
      <SemiHero 
        type="Contact Us /"
        imageSource="/images/Semi_Hero/Contact.jpg"
      />
      <ContactForm />
    </div>
  )
}

export default Contact