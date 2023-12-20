import React from 'react'
import Card from './Card'

const ProjectComponent = () => {
  const cardsData = [
    {
      imageSrc: 'project1.svg',
      name: 'Проект №1',
      description: 'Описание проекта №1',
      logo: 'Logo',
    },
    {
      imageSrc: 'project2.svg',
      name: 'Проект №2',
      description: 'Описание проекта №2',
      logo: 'Logo',
    },
    {
      imageSrc: 'project3.svg',
      name: 'Проект №3',
      description: 'Описание проекта №3',
      logo: 'Logo',
    },
  ]

  return (
    <div
      className="mobile:pb-[96px] tablet:pb-[120px] laptop:pb-[144px] bg-white "
      id="projects"
    >
      <div
        className="mobile:pl-[30px] mobile:pt-[20px]
                tablet:pl-[45px] tablet:pt-[30px]
                laptop:pl-[55px] laptop:pt-[38px] "
      >
        <h2
          className="mobile:text-[24px] 
                tablet:text-[36px] 
                laptop:text-[42px] pb-[55px] font-[500] text-[#5d5d5b]"
        >
          Наши реализованные проекты
        </h2>
      </div>
      <div className="flex justify-around mobile:flex-col space-y-3 laptop:flex-row">
        {cardsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  )
}

export default ProjectComponent
