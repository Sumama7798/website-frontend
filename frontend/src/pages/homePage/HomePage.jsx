import React from 'react'

import HomeIntroSection from '../../pageContents/homePageContents/introSection/HomeIntroSection.js'
import HomeServicesSection from '../../pageContents/homePageContents/serivesSection/HomeServicesSection.js'
import FeaturedProjectSection from '../../pageContents/homePageContents/featuredProjectsSection/FeaturedProjectsSection.js'
import AcomplishmentBanner from '../../pageContents/homePageContents/acomplishmentBanner/AcomplishmentBanner.js'
import GetStartedBanner from '../../pageContents/homePageContents/getStartedBanner/GetStartedBanner.js'
import Footer from '../../pageContents/homePageContents/footer/Footer.js'

const HomePage = () => {
  return (
    <div>
    <HomeIntroSection />
    <HomeServicesSection />
    <FeaturedProjectSection />
    <AcomplishmentBanner />
    <GetStartedBanner />
    <Footer />
    </div>
  )
}

export default HomePage