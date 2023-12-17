import React from 'react'

export default function ExpertiseComponent() {
  return (
    <>
      <h2 className="bg-white text-[42px] text-[#5d5d5b] pl-[55px] pb-[39px] font-[500]">
        Наша экспертиза
      </h2>
      <div>
        <div id="infrastructure" className="flex justify-between">
          <div className="flex-col justify-center pt-[70px] pl-[101px]">
            <h3 className="text-[#030303] text-[42px] font-[600] pb-[8px]">
              Инфраструктура
            </h3>
            <p
              style={{ maxWidth: '454px', width: '100%' }}
              className="text-[#030303] text-[20px] pb-[42px]"
            >
              Консалтинг и сопровождение инфраструктурных проектов в Казахстане
              от формирования бизнес-идеи до реализации проекта.
            </p>
            <button className="leading-tight text-[16px] text-[#000000] bg-[#c3f2cb] rounded-3xl font-[600] w-[316px] h-[45px]">
              Узнать подробнее
            </button>
          </div>
          <img
            src="infra.svg"
            alt="Infrastructure"
            className="w-[50%] object-cover"
          />
        </div>
        <div id="logistics" className="flex justify-between">
          <img
            src="logistics.svg"
            alt="Logistics"
            className="w-[50%] object-cover"
          />
          <div className="flex-col justify-center pt-[70px]">
            <h3 className="text-[#030303] text-[42px] font-[600] pb-[8px]">
              Логистика
            </h3>
            <p
              style={{ maxWidth: '577px', width: '100%' }}
              className="text-[#030303] text-[20px] pb-[42px]"
            >
              Консалтинговые услуги в области транспорта и логистики. Помощь в
              реализации крупных логистических проектов.
            </p>
            <button className="leading-tight text-[16px] text-[#000000] bg-[#c3f2cb] rounded-3xl font-[600] w-[316px] h-[45px]">
              Узнать подробнее
            </button>
          </div>
        </div>
        <div id="esg" className="flex justify-between">
          <div className="flex-col justify-center pt-[70px] pl-[101px]">
            <h3 className="text-[#030303] text-[42px] font-[600] pb-[8px]">
              ESG
            </h3>
            <p
              style={{ maxWidth: '479px', width: '100%' }}
              className="text-[#030303] text-[20px] pb-[42px]"
            >
              Поддержка развития и трансформации бизнеса в направлении
              ответственного отношения к экологии, социальным направлениям и
              устойчивому развитию.
            </p>
            <button className="leading-tight text-[16px] text-[#000000] bg-[#c3f2cb] rounded-3xl font-[600] w-[316px] h-[45px]">
              Узнать подробнее
            </button>
          </div>
          <img src="esg.svg" alt="ESG" className="w-[50%] object-cover pb-2" />
        </div>
      </div>
    </>
  )
}
