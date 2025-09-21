import React from 'react'
import { TermsconditionData } from '@/data/termsconditionData'

const Termsconditionpage = () => {
  return (
    <div>
      <section className="bg-white 500 text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-red-500 tracking-widest font-medium title-font mb-1">
              AF AUTO GLOSS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Terms & Conditions
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base pb-4">
              Welcome to AF AUTO GLOSS. By accessing or purchasing from our website, you agree to comply with the following Terms & Conditions. Please read them carefully, as they govern your use of our products and services.
            </p>

            {TermsconditionData.map((item, idx) => (
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

export default Termsconditionpage