import React from 'react'
import StatsContainer from '@/components/StatsContainer'
import Newsletter from '@/components/Newsletter'

const HomePage = () => {
  return (
    <div className='bg-white 500'>
      <StatsContainer/>
      
      <Newsletter />
    </div>
  )
}

export default HomePage