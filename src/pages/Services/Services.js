import React from 'react'
import SemiHero from '../../components/SemiHero/SemiHero'
import ServiceHero from '../../components/ServiceHero/ServiceHero'

function Services() {
  return (
    <div className='services'>
      <SemiHero
        type="Our Services /"
        imageSource="/images/Semi_Hero/Services.jpg"
      />
      <ServiceHero />
    </div>
  )
}

export default Services