import React from 'react'

export default function AboutUsComponent() {
  return (
    <div className="pl-[55px] pt-[38px] pb-16">
      <h1 className="text-[42px] text-[#5d5d5b] font-[500]">О нас</h1>
      <div className="flex justify-center items-center gap-[41px]">
        <img src="expo.svg" alt="Expo" />
        <p
          style={{ maxWidth: '603px', width: '100%' }}
          className="text-[26px] text-[#030303]"
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
