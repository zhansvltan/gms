import React from 'react'
import Header from '../components/Header'
import ImageComponent from '../components/Image'
import AboutUsComponent from '../components/About'
import GroupsComponent from '../components/Group'
import ExpertiseComponent from '../components/Expertise'
import ProjectComponent from '../components/Project'
import PartnerComponent from '../components/Partner'
import ConsultationComponent from '../components/Consultation'
import Contact from '../Contact/Contact'

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="mobile: px-[2vw] laptop:px-0">
        <ImageComponent />
        <AboutUsComponent />
        <GroupsComponent />
        <ExpertiseComponent />
        <ProjectComponent />
        <PartnerComponent />
        <ConsultationComponent />
        <Contact />
      </div>
    </div>
  )
}

export default HomePage
