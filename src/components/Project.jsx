import React from "react";
import Card from "./Card";

const ProjectComponent = () => {
  const cardsData = [
    {
      imageSrc: "project1.svg",
      name: "Проект №1",
      description: "Описание проекта №1",
      logo: "Logo",
    },
    {
      imageSrc: "project2.svg",
      name: "Проект №2",
      description: "Описание проекта №2",
      logo: "Logo",
    },
    {
      imageSrc: "project3.svg",
      name: "Проект №3",
      description: "Описание проекта №3",
      logo: "Logo",
    },
  ];

  return (
    <div className="pb-[144px] bg-white ">
      <div className="pl-[55px] pt-[42px]">
        <h2 className="text-[42px] pb-[55px] font-[500] text-[#5d5d5b]">
          Наши реализованные проекты
        </h2>
      </div>
      <div className="flex justify-around">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default ProjectComponent;
