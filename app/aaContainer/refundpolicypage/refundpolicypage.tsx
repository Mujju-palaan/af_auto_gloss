import React from 'react'
import { RefundpolicyData } from '@/data/policiesData'

const Refundpolicypage = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6">Refund Policy</h1>
            <p className="text-gray-700 mb-6">Last Updated: 23rd Sep, 2025</p>
            <p className="text-gray-700 mb-6">
              Welcome to AF AUTO GLOSS. We have a 14-day return policy, which means you have 14 days after receiving your item to request a return. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You’ll also need the receipt or proof of purchase.              
            </p>
        
             {RefundpolicyData.map((item, idx) => {
               // Collect non-empty list items dynamically
                const listItems = [item.l1, item.l2, item.l3, item.l4, item.l5].filter(Boolean);
        
                return (
                <div key={idx}>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h2>
                  {listItems.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                      {listItems.map((li, i) => (
                        <li key={i} className="leading-relaxed">
                         {li}
                        </li>
                      ))}
                    </ul>
                  )}
        
                </div>
                    );
              })}
        
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">About AF Auto Gloss</h2>
              <p className="text-gray-700 mb-6">
                AF Auto Gloss, an automotive care brand that offers a complete range of cleaning, maintenance, and surface protection solutions for passionate car and bike enthusiasts. Established in 2025, the brand provides high-quality, economical, and easy-to-use auto detailing products for four-wheelers, two-wheelers, and cycles. All products are manufactured in-house and thoroughly tested at our state-of-the-art facility, ensuring best-in-class performance.
            </p>
          </div>
        </div> 
  )
}

export default Refundpolicypage