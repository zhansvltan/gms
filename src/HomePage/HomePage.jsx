import React from 'react'
import Header from '../components/Header'
import ImageComponent from '../components/Image'
import AboutUsComponent from '../components/About'
import GroupsComponent from '../components/Group'
import ExpertiseComponent from '../components/Expertise'
import ProjectComponent from '../components/Project'
import PartnerComponent from '../components/Partner'
import ConsultationComponent from '../components/Consultation'

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <ImageComponent />
      <div className="mobile:px-[20px] laptop:px-[60px]">
        <AboutUsComponent />
        <GroupsComponent />
      </div>
      <ExpertiseComponent />
      <ProjectComponent />
      <PartnerComponent />
      <ConsultationComponent />
    </div>
  )
}

export default HomePage
