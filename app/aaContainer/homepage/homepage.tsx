import React from 'react'
import StatsContainer from '@/components/StatsContainer'
import Newsletter from '@/components/Newsletter'
import Content from './content'
import Product from '@/app/product/page'

const HomePage = () => {
  return (
    <div className='bg-white 500'>
      <Content/>
      <Product/>
      <StatsContainer/>
      
      <Newsletter />
    </div>
  )
}

export default HomePage