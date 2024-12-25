import React from 'react'

import HomeIntroSection from '../../pageContents/homePageContent/introSection/HomeIntroSection.jsx'
import HomeServicesSection from '../../pageContents/homePageContent/serivesSection/HomeServicesSection.jsx'
import FeaturedProjectSection from '../../pageContents/homePageContent/featuredProjectsSection/FeaturedProjectsSection.jsx'
import AcomplishmentBanner from '../../pageContents/homePageContent/acomplishmentBanner/AcomplishmentBanner.jsx'
import GetStartedBanner from '../../pageContents/homePageContent/getStartedBanner/GetStartedBanner.jsx'
import Footer from '../../pageContents/homePageContent/footer/Footer.jsx'

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