import React from 'react'
import { PrivacypolicyData } from '@/data/policiesData'

const Privacypolicypage = () => {
  return (
    <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-gray-700 mb-6">Last Updated: 23rd Sep, 2025</p>
            <p className="text-gray-700 mb-6">
              At AF Auto Gloss, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or purchase our products.            
            </p>

             {PrivacypolicyData.map((item, idx) => {
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

export default Privacypolicypage