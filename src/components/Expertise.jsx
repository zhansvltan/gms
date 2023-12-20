import React from 'react'

export default function ExpertiseComponent() {
  return (
    <>
      <h2
        className="bg-white text-[#5d5d5b] font-[500]
                    mobile:text-[24px] mobile:pl-[30px] mobile:pt-[20px] mobile:pb-6
                    tablet:text-[36px] tablet:pl-[45px] tablet:pt-[30px] tablet:pb-8
                    laptop:text-[42px] laptop:pl-[55px] laptop:pt-[38px] laptop:pb-12"
      >
        Наша экспертиза
      </h2>
      <div className="pb-1">
        <div
          id="infrastructure"
          className="flex justify-between mobile:flex-col laptop:flex-row"
        >
          <div
            className="flex-col justify-center  
            mobile:pt-[40px] mobile:pl-[75px]
            tablet:pt-[60px] tablet:pl-[90px]
            laptop:pt-[70px] laptop:pl-[101px]"
          >
            <h3
              className="text-[#030303] font-[600]
                mobile:text-[24px] mobile:pb-[4px]
                tablet:text-[36px] tablet:pb-[6px]
                laptop:text-[42px] laptop:pb-[8px]"
            >
              Инфраструктура
            </h3>
            <p
              className="text-[#030303] max-w-[454px] 
            mobile:w-[60%] mobile:text-[12px] mobile:pb-4
            tablet:w-[75%] tablet:text-[16px] tablet:pb-8
            laptop:w-[100%] laptop:text-[20px] laptop:pb-12"
            >
              Консалтинг и сопровождение инфраструктурных проектов в Казахстане
              от формирования бизнес-идеи до реализации проекта.
            </p>
            <button
              className="leading-tight text-[#000000] bg-[#c3f2cb] rounded-3xl font-[500] 
                mobile:w-[105px] mobile:h-[25px] mobile:text-[8px] mobile:mb-1
                tablet:w-[210px] tablet:h-[40px] tablet:text-[12px]
                laptop:w-[316px] laptop:h-[45px] laptop:text-[16px] laptop:mb-[60px]"
            >
              Узнать подробнее
            </button>
          </div>
          <img
            src="infra.svg"
            alt="Infrastructure"
            className="
            laptop:w-[50%] object-cover"
          />
        </div>

        <div
          id="logistics"
          className="flex justify-between mobile:flex-col laptop:flex-row"
        >
          <img
            src="logistics.svg"
            alt="Logistics"
            className="
                  hidden laptop:block
                  tablet:w-[50%] tablet:object-cover
                  laptop:w-[50%] laptop:object-cover"
          />
          <div
            className="flex-col justify-center 
                mobile:pt-[40px]
                tablet:pt-[60px]
                laptop:pt-[70px]"
          >
            <h3
              className="text-[#030303] font-[600]
                mobile:text-[24px] mobile:pb-[4px]  mobile:pt-[40px] mobile:pl-[75px]
                tablet:text-[36px] tablet:pb-[6px]
                laptop:pt-[0px] laptop:pl-[0px] laptop:text-[42px] laptop:pb-[8px]
                "
            >
              Логистика
            </h3>
            <p
              className="text-[#030303] max-w-[577px] 
                mobile:w-[60%] mobile:text-[12px] mobile:pb-4 mobile:pt-[0px] mobile:pl-[75px]
                tablet:w-[75%] tablet:text-[16px] tablet:pb-8
                laptop:w-[100%] laptop:text-[20px] laptop:pb-12 laptop:pt-[0px] laptop:pl-[0px]
            "
            >
              Консалтинговые услуги в области транспорта и логистики. Помощь в
              реализации крупных логистических проектов.
            </p>
            <button
              className="leading-tight text-[#000000] bg-[#c3f2cb] rounded-3xl font-[500]
                      mobile:w-[105px] mobile:h-[25px] mobile:text-[8px] mobile:ml-[75px] mobile: mb-1
                      tablet:w-[210px] tablet:h-[40px] tablet:text-[12px]
                      laptop:w-[316px] laptop:h-[45px] laptop:text-[16px] laptop:ml-[0px] laptop: mb-0"
            >
              Узнать подробнее
            </button>
            <img
              src="logistics.svg"
              alt="Logistics"
              className="
                mobile:w-[100%] mobile:object-cover
                laptop:hidden"
            />
          </div>
        </div>

        <div
          id="esg"
          className="flex justify-between mobile:flex-col laptop:flex-row"
        >
          <div
            className="flex-col justify-center 
            mobile:pt-[40px] mobile:pl-[75px]
            laptop:pt-[70px] laptop:pl-[101px]"
          >
            <h3
              className="text-[#030303] font-[600] 
                mobile:text-[24px] mobile:pb-[4px]
                tablet:text-[36px] tablet:pb-[6px]
                laptop:text-[42px] laptop:pb-[8px]"
            >
              ESG
            </h3>
            <p
              className="text-[#030303] max-w-[479px] 
            mobile:w-[60%] mobile:text-[12px] mobile:pb-4
            tablet:w-[75%] tablet:text-[16px] tablet:pb-8
            laptop:w-[100%] laptop:text-[20px] laptop:pb-12"
            >
              Поддержка развития и трансформации бизнеса в направлении
              ответственного отношения к экологии, социальным направлениям и
              устойчивому развитию.
            </p>
            <button
              className="leading-tight text-[#000000] bg-[#c3f2cb] rounded-3xl font-[500] 
                      mobile:w-[105px] mobile:h-[25px] mobile:text-[8px] mobile:mb-1
                      tablet:w-[210px] tablet:h-[40px] tablet:text-[12px]
                      laptop:w-[316px] laptop:h-[45px] laptop:text-[16px] laptop:mb-0"
            >
              Узнать подробнее
            </button>
          </div>
          <img
            src="esg.svg"
            alt="ESG"
            className="
            laptop:w-[50%] object-cover pb-4
            "
          />
        </div>
      </div>
    </>
  )
}
