import React from 'react'

export default function ExpertiseComponent() {
  const handleScrollClick = () => {
    // Replace 'targetComponentId' with the actual ID of the target component
    const targetComponent = document.getElementById('consultation')

    if (targetComponent) {
      const yOffset =
        targetComponent.getBoundingClientRect().top + window.scrollY

      // Scroll to the target component
      window.scrollTo({ top: yOffset, behavior: 'smooth' })
    }
  }
  return (
    <div id="services">
      <h2
        className="bg-white text-[#5d5d5b] font-[500] mt-8 mb-8
       mobile:text-[18px] mobile:text-center 
       tablet:text-[30px] 
       laptop:text-[42px] laptop:text-start
       mobile:px-[20px] laptop:px-[60px]"
      >
        Наша экспертиза
      </h2>
      <div className="mobile:text-justify laptop:text-start bg-[#f0f0f0] pt-4">
        <div
          id="infrastructure"
          className="flex justify-between 
          mobile:flex-col mobile:items-center
          laptop:flex-row"
        >
          <div
            className="flex-col
            mobile:items-center mobile:flex mobile:space-y-3
            laptop:space-y-6
            laptop:block laptop:pl-[7%]"
          >
            <h3
              className="text-[#030303] font-[600]
                mobile:text-[16px]
                tablet:text-[22px]
                laptop:text-[42px]"
            >
              Инфраструктура
            </h3>
            <p
              className="text-[#030303] max-w-[454px] 
            mobile:w-[75%] mobile:text-[14px] 
            tablet:w-[90%] tablet:text-[16px]
            laptop:w-[100%] laptop:text-[20px]"
            >
              Консалтинг и сопровождение инфраструктурных проектов в Казахстане
              от формирования бизнес-идеи до реализации проекта.
            </p>
            <button
              onClick={handleScrollClick}
              className="leading-tight text-[#000000] bg-[#c3f2cb] rounded-3xl font-[500]
                mobile:w-[28vw] mobile:h-[25px] mobile:text-[10px] mobile:mb-1
                tablet:w-[210px] tablet:h-[40px] tablet:text-[12px]
                laptop:w-[316px] laptop:h-[45px] laptop:text-[16px] laptop:mb-0"
            >
              Узнать подробнее
            </button>
          </div>
          <img
            src="infra.svg"
            alt="Infrastructure"
            className="object-cover
             mobile:my-2 laptop:my-0 mobile:rounded-2xl mobile:w-[75%]
             tablet:w-[100%] tablet:object-cover
            laptop:rounded-[0px]
            laptop:w-[50%]"
          />
        </div>

        <div
          id="logistics"
          className="flex justify-between 
          mobile:flex-col mobile:items-center 
          laptop:flex-row"
        >
          <img
            src="logistics.svg"
            alt="Logistics"
            className="mobile:my-2 laptop:my-0 mobile:rounded-2xl mobile:w-[75%]
                  hidden laptop:block
                  laptop:w-[50%] laptop:object-cover
                  laptop:rounded-[0px]"
          />
          <div
            className="flex-col
            mobile:items-center mobile:flex mobile:space-y-3 
            laptop:space-y-6
            laptop:block laptop:pl-[7%]"
          >
            <h3
              className="text-[#030303] font-[600]
                mobile:text-[16px] mobile:mt-2
                tablet:text-[22px]
                laptop:text-[42px] laptop:mt-0
                "
            >
              Логистика
            </h3>
            <p
              className="text-[#030303] max-w-[577px] 
              mobile:w-[75%] mobile:text-[14px] 
              tablet:w-[75%] tablet:text-[16px]
              laptop:w-[100%] laptop:text-[20px]
            "
            >
              Консалтинговые услуги в области транспорта и логистики. Помощь в
              реализации крупных логистических проектов.
            </p>
            <button
              onClick={handleScrollClick}
              className="leading-tight text-[#000000] bg-[#c3f2cb] rounded-3xl font-[500] 
              mobile:h-[25px] mobile:text-[10px] mobile:w-[28vw]
              tablet:h-[40px] tablet:text-[12px]
              laptop:h-[45px] laptop:text-[16px] laptop:w-[22vw]"
            >
              Узнать подробнее
            </button>
            <img
              src="logistics.svg"
              alt="Logistics"
              className="mobile:my-2 mobile:rounded-2xl object-cover mobile:w-[75%]
         tablet:w-[1024px] tablet:object-cover
         laptop:my-0 
         laptop:hidden laptop:rounded-[0px]"
            />
          </div>
        </div>

        <div
          id="esg"
          className="flex justify-between 
          mobile:flex-col mobile:items-center 
          laptop:flex-row"
        >
          <div
            className="flex-col justify-center
             mobile:items-center mobile:flex mobile:space-y-3 
             laptop:space-y-6 laptop:block laptop:pl-[7%]"
          >
            <h3
              className="text-[#030303] font-[600] 
                mobile:text-[16px] mobile:mt-4
                tablet:text-[22px] 
                laptop:text-[42px] laptop:mt-0"
            >
              ESG
            </h3>
            <p
              className="text-[#030303] max-w-[454px] 
              mobile:w-[75%] mobile:text-[14px] 
              tablet:w-[75%] tablet:text-[16px]
              laptop:w-[100%] laptop:text-[20px]"
            >
              Поддержка развития и трансформации бизнеса в направлении
              ответственного отношения к экологии, социальным направлениям и
              устойчивому развитию.
            </p>
            <button
              onClick={handleScrollClick}
              className="leading-tight text-[#000000] bg-[#c3f2cb] rounded-3xl font-[500] 
                      mobile:w-[28vw] mobile:h-[25px] mobile:text-[10px]
                      tablet:w-[210px] tablet:h-[40px] tablet:text-[12px]
                      laptop:w-[316px] laptop:h-[45px] laptop:text-[16px]"
            >
              Узнать подробнее
            </button>
          </div>
          <img
            src="esg.svg"
            alt="ESG"
            className="mobile:my-3 laptop:my-0 mobile:rounded-2xl mobile:w-[75%]
            tablet:w-[100%] tablet:object-cover
            laptop:rounded-[0px] laptop:w-[50%] object-cover
            "
          />
        </div>
      </div>
    </div>
  )
}
