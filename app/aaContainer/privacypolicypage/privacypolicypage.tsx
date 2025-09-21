import React from 'react'
import { PrivacypolicyData } from '@/data/policiesData'

const Privacypolicypage = () => {
  return (
    <div>
      <section className="bg-white 500 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
              AF AUTO GLOSS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Privacy Policy
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-4">
              At AF Auto Gloss, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or purchase our products.
            </p>

            {PrivacypolicyData.map((item, idx) => (
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
  )
}

export default Privacypolicypage