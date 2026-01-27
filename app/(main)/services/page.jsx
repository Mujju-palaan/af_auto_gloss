import React from 'react'
import ServiceDetails from '../../../components/(service)/service/ServiceDetails'
import { Suspense } from 'react'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceDetails />
    </Suspense>
  )
}

export default page