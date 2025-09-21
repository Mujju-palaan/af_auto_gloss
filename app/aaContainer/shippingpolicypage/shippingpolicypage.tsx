import { ShippingpolicyData } from '@/data/policiesData'
import React from 'react'

const Shippingpolicypage = () => {
  return (
    <div>
      <div>
        <section className="bg-white 500 text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
                AF AUTO GLOSS
              </h2>
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Shipping Policy
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-4">
                At AF Auto Gloss, we are committed to delivering your car care products, including Dashboard Polish, Tyre Polish, Glass Cleaner, Foam, and Microfiber Car Cloth, in a safe, timely, and reliable manner. Please review our shipping policy below for details on processing, delivery, and related procedures.              
              </p>

              {ShippingpolicyData.map((item, idx) => (
                <div key={idx} className='text-left pb-4'>
                  <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                    {item.title}
                  </h1>
                  <ul>
                    <li>{item.l1}</li>
                    <li>{item.l2}</li>
                    <li>{item.l3}</li>
                    <li>{item.l4}</li>
                    <li>{item.l5}</li>
                  </ul>
                </div>
              ))}

            </div>



          </div>
        </section>
      </div>
    </div>
  )
}

export default Shippingpolicypage