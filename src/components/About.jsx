import React from 'react'

export default function AboutUsComponent() {
  return (
    <div
      className="mobile:pl-[30px] mobile:pt-[20px] mobile:pb-4
                tablet:pl-[45px] tablet:pt-[30px] tablet:pb-12
                laptop:pl-[55px] laptop:pt-[38px] laptop:pb-16"
    >
      <h1
        className="text-[#5d5d5b] font-[500] 
                mobile:text-[24px] 
                tablet:text-[36px] 
                laptop:text-[42px]"
      >
        О нас
      </h1>
      <div
        className="flex justify-center items-center
      mobile:flex-col mobile:gap-y-2
      tablet:flex-col tablet:gap-y-4
      laptop:flex-row laptop:justify-between laptop:gap-[41px]"
      >
        <img
          src="expo.svg"
          alt="Expo"
          className="
          mobile:w-[60%] mobile:h-[60%] mobile:pt-2
          tablet:w-[75%] tablet:h-[75%] tablet:pt-3
          laptop:w-[100%] laptop:h-[100%] laptop:pt-4
          m-0"
        />
        <p
          className="max-w-[603px] text-[#030303] w-[100%] 
          mobile:text-[14px]
          tablet:text-[22px]
          laptop:text-[26px]
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
