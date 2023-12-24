import React from 'react'

export default function PartnerComponent() {
  return (
    <div
      id="partners"
      className="flex bg-white items-center justify-around
        mobile:flex-col mobile:my-8
        laptop:flex-row laptop:my-24"
    >
      <h2
        className="text-[#030303] font-[500]
        mobile:text-[18px] mobile:text-center
        tablet:text-[30px] 
        laptop:max-w-[30%] laptop:text-start laptop:text-[42px]"
      >
        Наши клиенты и партнеры
      </h2>
      <div
        className="flex-col 
      mobile:space-y-8 mobile:p-8 
      laptop:space-y-16 laptop:p-0 laptop:w-[47.5%]"
      >
        <div className="flex justify-between">
          <div>
            <img src="world.svg" alt="World Bank Group" />
          </div>
          <div>
            <img src="dubai.svg" alt="Dubai" />
          </div>
        </div>
        <div className="flex justify-center  items-center">
          <img src="aifc.svg" alt="AIFC" className="mobile:w-[50%]" />
        </div>
      </div>
    </div>
  )
}
