import React from 'react'
import PolicyPage from '../../../components/(service)/policies/PolicyPage'
import PrivacyPolicyData from '../../../data/PrivacyPolicy'
import PolicyBanner from '@/components/(service)/policies/PolicyBanner'

const Privacypolicy = () => {
  return (
    <div>
      <PolicyBanner title={`Privacy Policy`} date={`Effective 23rd Sep, 2025`}/>
      <PolicyPage PolicyData={PrivacyPolicyData} />
    </div>
  )
}

export default Privacypolicy