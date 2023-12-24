import React from 'react'
import Card from './Card'

const ProjectComponent = () => {
  const cardsData = [
    {
      imageSrc: 'project1.svg',
      name: 'Проект №1',
      description: 'Описание проекта №1',
    },
    {
      imageSrc: 'project2.svg',
      name: 'Проект №2',
      description: 'Описание проекта №2',
    },
    {
      imageSrc: 'project3.svg',
      name: 'Проект №3',
      description: 'Описание проекта №3',
    },
  ]

  return (
    <div className="bg-white " id="projects">
      <div>
        <h2
          className="font-[500] text-[#5d5d5b] my-8
                mobile:text-[18px] mobile:text-center
                tablet:text-[36px] 
                laptop:text-[42px] laptop:text-start
                mobile:px-[20px] laptop:px-[60px]"
        >
          Наши реализованные проекты
        </h2>
      </div>
      <div
        className="flex justify-around items-baseline
      mobile:flex-col mobile:space-y-3 mobile:items-center
      tablet:space-y-6 
      laptop:flex-row laptop:items-baseline"
      >
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default ProjectComponent
