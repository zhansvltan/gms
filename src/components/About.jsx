import React from 'react'

export default function AboutUsComponent() {
  return (
    <div id="about">
      <h1
        className="text-[#5d5d5b] font-[500] mt-8
                mobile:text-[24px] mobile:text-center
                tablet:text-[36px] 
                laptop:text-[42px] laptop:text-start"
      >
        О нас
      </h1>
      <div
        className="flex items-center p-6
      mobile:flex-col mobile:gap-y-2
      tablet:flex-col tablet:gap-y-4
      laptop:flex-row laptop:justify-between laptop:gap-[41px]"
      >
        <img
          src="expo.svg"
          alt="Expo"
          className="max-w-[60%] 
          mobile:w-[70%]
          laptop:w-[60%]
          mobile:rounded-2xl laptop:rounded-[0px]
          m-0"
        />
        <p
          className="text-[#030303] w-[100%] 
          mobile:text-[14px] mobile:text-center
          tablet:text-[22px]
          laptop:text-[26px] laptop:text-start laptop:max-w-[42%]
          m-0"
        >
          <strong>Green Mobility Solutions (IEC Research)</strong> оказывает
          услуги в сфере экономического консалтинга, развития территорий и
          предлагает решения для улучшения функционирования и развития страновых
          и региональных транспортных систем, объединяя экспертизу в
          макроэкономическом анализе и прогнозировании, инфраструктурном
          планировании и финансах на городском, региональном, страновом и
          международном уровне c фокусом на Казахстан и страны Центральной Азии.
        </p>
      </div>
    </div>
  )
}
