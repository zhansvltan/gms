import React from 'react'

export default function GroupsComponent() {
  return (
    <div className="bg-white" id="groups">
      <h2
        className="font-[500] text-[#5d5d5b] mb-8
        mobile:text-[18px] mobile:text-center mobile:px-[20px]
        tablet:text-[36px] 
        laptop:text-[42px] laptop:text-start laptop:px-[60px]"
      >
        О группе компаний
      </h2>
      <div
        className="flex 
      mobile:flex-col mobile:space-y-3 mobile:items-center mobile:px-8 
      laptop:flex-row laptop:space-y-0 laptop:items-stretch laptop:justify-between laptop:px-16"
      >
        <div
          className="flex-col bg-orange-600 mobile:px-4 mobile:pt-4 laptop:px-6 laptop:pt-6  rounded-xl 
          mobile:pb-12 
        mobile:w-[80%]
          tablet:w-[50%] tablet:pb-12 
        laptop:w-[30%] laptop:pb-0"
        >
          <h3 className="text-[#ffffff] mobile:text-[14px] laptop:text-[24px] font-[300] mobile:leading-[24px] laptop:leading-[31px] m-0">
            IEC International
          </h3>
          <p className="text-[#ffffff] mobile:text-[14px] laptop:text-[24px] font-[300] mobile:leading-[24px] laptop:leading-[31px] m-0 mb-8 ">
            Париж, Франция
          </p>
          <p className="text-[#ffffff] mobile:text-[14px] laptop:text-[24px] font-[300] mobile:leading-[24px] laptop:leading-[31px] m-0 w-[90%]">
            Предоставляет консультационные услуги в сфере инфраструктуры и
            транспорта на основе международного опыта, уникальных цифровых
            решений и прикладного видения стратегических изменений.
          </p>
        </div>
        <div
          className="flex-col bg-teal-700 mobile:px-4 mobile:pt-4 laptop:px-6 laptop:pt-6 pb-12 rounded-xl 
          mobile:pb-12 
          mobile:w-[80%]
          tablet:w-[50%] tablet:pb-12 
          laptop:w-[30%] laptop:pb-12"
        >
          <h3 className="text-[#ffffff] mobile:text-[14px] laptop:text-[24px] font-[300] mobile:leading-[24px] laptop:leading-[31px]">
            IEC Application & Services
          </h3>
          <p className="text-[#ffffff] mobile:text-[14px] laptop:text-[24px] font-[300] mobile:leading-[24px] laptop:leading-[31px] mb-8 ">
            Париж, Франция
          </p>
          <p className="text-[#ffffff] mobile:text-[14px] laptop:text-[24px] font-[300] mobile:leading-[24px] laptop:leading-[31px] w-[90%]">
            Разрабатывает собственное SaaS-программное обеспечение для
            моделирования, планирования и мониторинга перевозок. Проводит
            исследования и разработки в сфере транспорта и логистики с
            использованием больших данных и передовой аналитики.
          </p>
        </div>
        <div
          className="flex-col bg-yellow-500 rounded-xl mobile:px-4 mobile:pt-4 laptop:px-6 laptop:pt-6 
                mobile:pb-12 
                mobile:w-[80%]
                tablet:w-[50%] tablet:pb-12 
                laptop:w-[30%] laptop:pb-0"
        >
          <h3 className="text-[#ffffff] mobile:text-[14px] laptop:text-[24px] font-[300] mobile:leading-[24px] laptop:leading-[31px] ">
            IEC Research
          </h3>
          <p className="text-[#ffffff] mobile:text-[14px] laptop:text-[24px] font-[300] mobile:leading-[24px] laptop:leading-[31px] mb-8 ">
            Астана, Казахстан
          </p>
          <p className="text-[#ffffff] mobile:text-[14px] laptop:text-[24px] font-[300] mobile:leading-[24px] laptop:leading-[31px] w-[90%] ">
            Обеспечивает стратегические исследования и консультации в области
            макроэкономики, развития инфраструктуры, ESG и товарных рынков с
            акцентом на Центральную Азию и Кавказ.
          </p>
        </div>
      </div>
    </div>
  )
}
