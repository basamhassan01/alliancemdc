import React from 'react'
import Hero from '../../components/Hero/Hero'
import Features from '../../components/Features/Features'
import Factors from '../../components/Factors/Factors'
import Statistics from '../../components/Statistics/Statistics'
import Blog from '../../components/Blog/Blog'
import Brands from '../../components/Brands/Brands'

function Home() {
  return (
    <div className='home'>
      <Hero />
      <Features />
      <Factors />
      <Statistics />
      <Blog />
      <Brands />
    </div>
  )
}

export default Home