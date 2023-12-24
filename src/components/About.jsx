import React from 'react'

export default function AboutUsComponent() {
  return (
    <div id="about">
      <h1
        className="text-[#5d5d5b] font-[500] mt-8
                mobile:text-[18px] mobile:text-center mobile:px-[20px]
                tablet:text-[30px] 
                laptop:text-[42px] laptop:text-start laptop:px-[60px]"
      >
        О нас
      </h1>
      <div
        className="flex items-center
      mobile:flex-col mobile:gap-y-2 mobile:p-4 
      tablet:flex-col tablet:gap-y-4
      laptop:flex-row laptop:justify-between laptop:p-16 laptop:gap-[3vw]"
      >
        <img
          src="expo.svg"
          alt="Expo"
          className=" 
          mobile:max-w-[80%] laptop:max-w-[60%]
          mobile:rounded-2xl laptop:rounded-[0px]
          m-0"
        />
        <p
          className="text-[#030303] 
          mobile:text-[14px] mobile:text-justify mobile:justify-center mobile:w-[80%]
          tablet:text-[16px]
          laptop:text-[26px] laptop:text-start laptop:leading-[34px]
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
