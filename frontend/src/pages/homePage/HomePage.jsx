import React from 'react'

import HomeIntroSection from '../../pageContents/homePageContents/introSection/HomeIntroSection.jsx'
import HomeServicesSection from '../../pageContents/homePageContents/serivesSection/HomeServicesSection.jsx'
import FeaturedProjectSection from '../../pageContents/homePageContents/featuredProjectsSection/FeaturedProjectsSection.jsx'
import AcomplishmentBanner from '../../pageContents/homePageContents/acomplishmentBanner/AcomplishmentBanner.jsx'
import GetStartedBanner from '../../pageContents/homePageContents/getStartedBanner/GetStartedBanner.jsx'
import Footer from '../../pageContents/homePageContents/footer/Footer.jsx'

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