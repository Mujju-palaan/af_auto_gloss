import React from 'react'
import Productdetail from '@/components/product/productdetailCard'
import Productcardpage from '../../../components/product/ProductCardsOnly'
import Productall from '../../../components/product/product'
import ProductCardsOnly from '../../../components/product/ProductCardsOnly'
import Productdetails from '@/components/product/productdetailCard'
import Productdetailpage from '@/components/product/Productdetailpage'


const page = () => {
  return (
    <div>
      <ProductCardsOnly />
      <Productdetailpage />
      
    </div>
  )
}

export default page