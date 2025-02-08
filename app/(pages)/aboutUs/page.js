import React from 'react'
import TopBanner from './_components/TopBanner'
import AboutFounder from './_components/AboutFounder'
import OurValues from './_components/OurValues'
import Summary from './_components/Summary'

function page() {
  return (
    <div>
        <TopBanner />
        <Summary />
        <OurValues />
        <AboutFounder />
    </div>
  )
}

export default page