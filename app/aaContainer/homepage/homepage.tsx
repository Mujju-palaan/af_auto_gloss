import React from 'react'
import StatsContainer from '@/components/StatsContainer'
import Newsletter from '@/components/Newsletter'
import Content from './content'

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