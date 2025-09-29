import React from 'react'
import Productdetails from '@/components/cards/productdetail'
import { ProductData } from '@/data/ProductData'

const Productdetailpage = () => {
  return (
    <div>
        {ProductData.map((product, index) => (
        <Productdetails
            key={index}
            title={product.title}
            image={product.image}
            reviews={product.reviews}
            price={product.price}
            product_description={product.product_description}

        />
        ))}
    </div>
  )
}

export default Productdetailpage