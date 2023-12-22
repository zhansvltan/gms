import React from 'react'

export default function GroupsComponent() {
  return (
    <div className="bg-white" id="groups">
      <h2
        className="font-[500] text-[#5d5d5b] mb-8
        mobile:text-[24px] mobile:text-center mobile:px-[20px]
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
          className="flex-col bg-orange-600 px-6 pt-6  rounded-xl 
          mobile:pb-12 
        tablet:w-[50%] tablet:pb-12 
        laptop:w-[30%] laptop:pb-0"
        >
          <h3
            className="text-[24px] text-[#ffffff] m-0 "
            style={{ lineHeight: '31px', fontWeight: '300' }}
          >
            IEC International
          </h3>
          <p
            className="text-[24px] text-[#ffffff] m-0 mb-8 "
            style={{ lineHeight: '31px', fontWeight: '300' }}
          >
            {' '}
            Париж, Франция
          </p>
          <p
            className="text-[24px] text-[#ffffff] m-0 w-[90%]"
            style={{ lineHeight: '31px', fontWeight: '300' }}
          >
            Предоставляет консультационные услуги в сфере инфраструктуры и
            транспорта на основе международного опыта, уникальных цифровых
            решений и прикладного видения стратегических изменений.
          </p>
        </div>
        <div
          className="flex-col bg-teal-700 px-6 pt-6 pb-12 rounded-xl 
          mobile:pb-12 
          tablet:w-[50%] tablet:pb-12 
          laptop:w-[30%] laptop:pb-12"
        >
          <h3
            className="text-[24px] text-[#ffffff]"
            style={{ lineHeight: '31px', fontWeight: '300' }}
          >
            IEC Application & Services
          </h3>
          <p
            className="text-[24px] text-[#ffffff] mb-8 "
            style={{ lineHeight: '31px', fontWeight: '300' }}
          >
            Париж, Франция
          </p>
          <p
            className="text-[24px] text-[#ffffff] w-[90%]"
            style={{ lineHeight: '31px', fontWeight: '300' }}
          >
            Разрабатывает собственное SaaS-программное обеспечение для
            моделирования, планирования и мониторинга перевозок. Проводит
            исследования и разработки в сфере транспорта и логистики с
            использованием больших данных и передовой аналитики.
          </p>
        </div>
        <div
          className="flex-col bg-yellow-500 rounded-xl px-6 pt-6 
        mobile:pb-12 
        tablet:w-[50%] tablet:pb-12 
        laptop:w-[30%] laptop:pb-0"
        >
          <h3
            className="text-[24px] text-[#ffffff] "
            style={{ lineHeight: '31px', fontWeight: '300' }}
          >
            IEC Research
          </h3>
          <p
            className="text-[24px] text-[#ffffff] mb-8 "
            style={{ lineHeight: '31px', fontWeight: '300' }}
          >
            Астана, Казахстан
          </p>
          <p
            className="text-[24px] text-[#ffffff] w-[90%] "
            style={{ lineHeight: '31px', fontWeight: '300' }}
          >
            Обеспечивает стратегические исследования и консультации в области
            макроэкономики, развития инфраструктуры, ESG и товарных рынков с
            акцентом на Центральную Азию и Кавказ.
          </p>
        </div>
      </div>
    </div>
  )
}
