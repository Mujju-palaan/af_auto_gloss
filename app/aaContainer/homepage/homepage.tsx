import React from 'react'
import StatsContainer from '@/components/home/StatsContainer'
import Newsletter from '@/components/home/Newsletter'
import Content from '../../../components/home/content'
import Hero from './Hero'
import Productall from '../product/product'
import Testimonials from '@/app/(service)/testimonials/page'


const HomePage = () => {
  return (
    <div className='bg-white 500'>
      <Hero/>
      <Content/>
      <Productall />
      <StatsContainer/>
      <Testimonials />
      <Newsletter />
    </div>
  )
}

export default HomePage