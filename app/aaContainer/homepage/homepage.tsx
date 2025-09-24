import React from 'react'
import StatsContainer from '@/components/home/StatsContainer'
import Newsletter from '@/components/home/Newsletter'
import Content from '../../../components/home/content'

const HomePage = () => {
  return (
    <div className='bg-white 500'>
      <Content/>
      <StatsContainer/>
      
      <Newsletter />
    </div>
  )
}

export default HomePage