import React from 'react'
import Link from "next/link";
import { ProductData } from '@/data/ProductData'

const Productcard2 = () => {
  return (
    <div>
        <section className="bg-white 500 text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">

                {
                ProductData.map((item) => ( 

                <div key={item.id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                    <Link href={`/product/${item.id}`} 
                        className="block relative h-auto rounded ">
                    <img 
                        alt="ecommerce" 
                        className="object-cover object-center w-full h-full block" 
                        src={item.src}
                    />
                    </Link>
                    <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                    <p className="mt-1">{item.price}</p>
                    </div>
                </div>
                ))
                }

                </div>
            </div>
        </section>
    </div>
  )
}

export default Productcard2