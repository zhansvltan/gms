import React from "react";
import Header from "../components/Header";
import ImageComponent from "../components/Image";
import AboutUsComponent from "../components/About";
import GroupsComponent from "../components/Group";
import ExpertiseComponent from "../components/Expertise";
import ProjectComponent from "../components/Project";
import PartnerComponent from "../components/Partner";
import ConsultationComponent from "../components/Consultation";

const HomePage = () => {
  return (
    <div>
      <Header />
      <ImageComponent />
      <AboutUsComponent />
      <GroupsComponent />
      <ExpertiseComponent />
      <ProjectComponent/>
      <PartnerComponent/>
      <ConsultationComponent/>
    </div>
  );
};

export default HomePage;
