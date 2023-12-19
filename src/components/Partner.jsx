import React from 'react'

export default function PartnerComponent() {
  return (
    <div className="flex justify-center bg-white items-baseline mobile:flex-col laptop:flex-row">
      <h2
        className="text-[#030303] font-[500]
                mobile:text-[24px] w-[354px]
                tablet:text-[36px] w-[404px]
                laptop:text-[42px] w-[504px]"
      >
        Наши клиенты и партнеры
      </h2>
      <div className="flex-col mobile:pt-[15px] mobile:pb-[90px] laptop:pt-[0px] laptop:pb-[130px]">
        <div className="flex justify-between">
          <div>
            <img src="lancaster.svg" alt="Lancaster" />
          </div>
          <div>
            <img src="world.svg" alt="World Bank Group" />
          </div>
        </div>
        <div className="flex justify-between mobile:pt-[20px] laptop:pt-[30px]">
          <div>
            <img src="aifc.svg" alt="AIFC" />
          </div>
          <div>
            <img src="dubai.svg" alt="Dubai" />
          </div>
        </div>
      </div>
    </div>
  )
}
